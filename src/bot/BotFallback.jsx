// Still frame of the robot for reduced motion, low-end devices or no WebGL.
function BotFallback() {
  return (
    <img
      src="/bot-fallback.webp"
      alt=""
      width={200}
      height={240}
      decoding="async"
      className="h-full w-full object-contain"
    />
  );
}

export default BotFallback;
