import { useEffect, useRef } from "react";
import portrait from "../assets/portrait-cut.webp";

// The desktop portrait: a grid of phosphor cells built once from the cut-out
// photo. Under the pointer the real photo shows through a wobbling, dithered
// hole that fades back to pixels when the pointer moves on. It is one 2D
// canvas, and it only draws while something is changing.
const CELL = 7;
const RADIUS = 110;
const PHOS = "127,243,247";

const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function PixelPortrait() {
  const box = useRef(null);
  const canvas = useRef(null);

  useEffect(() => {
    const el = canvas.current;
    const wrap = box.current;
    const ctx = el.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const img = new Image();
    img.decoding = "async";
    let grid = null;
    let pointer = null;
    let raf = 0;
    const t0 = performance.now();

    function build() {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      // Hidden (small screens) or still loading: nothing to build yet.
      if (!w || !h) return;
      if (!img.src) img.src = portrait;
      if (!img.complete || !img.naturalWidth) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      el.width = Math.round(w * dpr);
      el.height = Math.round(h * dpr);
      const cols = Math.ceil(w / CELL);
      const rows = Math.ceil(h / CELL);

      const sample = document.createElement("canvas");
      sample.width = cols;
      sample.height = rows;
      const sc = sample.getContext("2d", { willReadFrequently: true });
      sc.drawImage(img, 0, 0, cols, rows);
      const data = sc.getImageData(0, 0, cols, rows).data;

      const layer = () => {
        const c = document.createElement("canvas");
        c.width = el.width;
        c.height = el.height;
        const g = c.getContext("2d");
        g.scale(dpr, dpr);
        return [c, g];
      };

      // Pixel layer: brightness quantised to a few phosphor levels, each cell
      // a little short of full height so rows read as scanlines.
      const [base, bg] = layer();
      const mask = new Uint8Array(cols * rows);
      bg.fillStyle = `rgb(${PHOS})`;
      for (let i = 0; i < cols * rows; i += 1) {
        const a = data[i * 4 + 3] / 255;
        if (a < 0.08) continue;
        mask[i] = 1;
        const lum = (0.3 * data[i * 4] + 0.59 * data[i * 4 + 1] + 0.11 * data[i * 4 + 2]) / 255;
        bg.globalAlpha = a * (0.07 + 0.43 * (Math.round(lum * 5) / 5));
        bg.fillRect((i % cols) * CELL, Math.floor(i / cols) * CELL, CELL - 1, CELL - 2);
      }

      // Photo layer, nudged toward the phosphor colour so it belongs on screen.
      const [photo, pg] = layer();
      pg.drawImage(img, 0, 0, w, h);
      pg.globalCompositeOperation = "source-atop";
      pg.fillStyle = `rgba(${PHOS},0.1)`;
      pg.fillRect(0, 0, w, h);

      const noise = new Float32Array(cols * rows);
      for (let i = 0; i < noise.length; i += 1) noise[i] = 0.05 + Math.random() * 0.85;

      grid = { cols, rows, dpr, base, photo, mask, noise, reveal: new Float32Array(cols * rows) };
      draw();
    }

    function draw() {
      const { cols, rows, dpr, base, photo, mask, noise, reveal } = grid;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, el.width, el.height);
      ctx.drawImage(base, 0, 0);

      // Every revealed cell joins one clip path, so the photo is one draw call.
      const size = CELL * dpr;
      let any = false;
      ctx.beginPath();
      for (let i = 0; i < cols * rows; i += 1) {
        if (mask[i] && reveal[i] > noise[i]) {
          ctx.rect((i % cols) * size, Math.floor(i / cols) * size, size, size);
          any = true;
        }
      }
      if (!any) return;
      ctx.save();
      ctx.clip();
      ctx.clearRect(0, 0, el.width, el.height);
      ctx.drawImage(photo, 0, 0);
      ctx.restore();
    }

    function tick(now) {
      raf = 0;
      if (!grid) return;
      const { cols, rows, reveal } = grid;
      const t = (now - t0) / 1000;
      let active = false;

      for (let i = 0; i < reveal.length; i += 1) {
        if (reveal[i] > 0.01) {
          reveal[i] *= reduced ? 0 : 0.92;
          active = true;
        } else reveal[i] = 0;
      }

      if (pointer) {
        const reach = RADIUS + 20;
        const c0 = Math.max(0, Math.floor((pointer.x - reach) / CELL));
        const c1 = Math.min(cols - 1, Math.ceil((pointer.x + reach) / CELL));
        const r0 = Math.max(0, Math.floor((pointer.y - reach) / CELL));
        const r1 = Math.min(rows - 1, Math.ceil((pointer.y + reach) / CELL));
        for (let r = r0; r <= r1; r += 1) {
          for (let c = c0; c <= c1; c += 1) {
            const dx = c * CELL + CELL / 2 - pointer.x;
            const dy = r * CELL + CELL / 2 - pointer.y;
            const d = Math.hypot(dx, dy);
            // The edge wobbles and ripples outward; reduced motion keeps it round and still.
            const wave = reduced ? 0 : 10 * Math.sin(Math.atan2(dy, dx) * 5 + t * 4) + 7 * Math.sin(d * 0.09 - t * 8);
            const v = 1 - smoothstep(RADIUS * 0.45, RADIUS, d + wave);
            const i = r * cols + c;
            if (v > reveal[i]) reveal[i] = v;
          }
        }
        active = true;
      }

      draw();
      if (active) raf = requestAnimationFrame(tick);
    }

    const wake = () => {
      if (!raf && grid) raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      if (!grid) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x > -RADIUS && y > -RADIUS && x < rect.width + RADIUS && y < rect.height + RADIUS;
      pointer = inside ? { x, y } : null;
      if (inside) wake();
    };
    const onLeave = () => {
      pointer = null;
    };

    img.onload = build;
    const ro = new ResizeObserver(build);
    ro.observe(wrap);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      img.onload = null;
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={box}
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 md:block"
      style={{ height: "min(84svh, 820px)", aspectRatio: "464 / 484" }}
    >
      <canvas ref={canvas} className="h-full w-full" />
    </div>
  );
}

export default PixelPortrait;
