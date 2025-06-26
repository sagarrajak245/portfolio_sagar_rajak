/* eslint-disable react/prop-types */
const gradientMapping = {
    blue: "linear-gradient(hsl(210, 100%, 56%), hsl(225, 80%, 45%))",
    purple: "linear-gradient(hsl(270, 95%, 60%), hsl(290, 85%, 50%))",
    red: "linear-gradient(hsl(355, 90%, 60%), hsl(0, 80%, 50%))",
    indigo: "linear-gradient(hsl(240, 90%, 60%), hsl(260, 75%, 50%))",
    orange: "linear-gradient(hsl(30, 100%, 60%), hsl(15, 90%, 50%))",
    green: "linear-gradient(hsl(145, 70%, 45%), hsl(160, 65%, 35%))",
    pink: "linear-gradient(hsl(330, 90%, 65%), hsl(340, 80%, 55%))",
    cyan: "linear-gradient(hsl(190, 80%, 55%), hsl(200, 70%, 45%))"
};

const GlassIcons = ({ items, className }) => {
    const getBackgroundStyle = (color) => {
        return gradientMapping[color]
            ? { background: gradientMapping[color] }
            : { background: color };
    };

    return (
        <div
            className={`grid gap-[5em] grid-cols-2 md:grid-cols-3 mx-auto py-[4em] overflow-visible ${className || ""}`}
        >
            {items.map((item, index) => (
                <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${item.customClass || ""}`}
                >
                    {/* Back gradient layer */}
                    <span
                        className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
                        style={{
                            ...getBackgroundStyle(item.color),
                            boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)"
                        }}
                    ></span>

                    {/* Foreground glass blur */}
                    <span
                        className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
                        style={{
                            boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset"
                        }}
                    >
                        <span
                            className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center text-white"
                            aria-hidden="true"
                        >
                            {item.icon}
                        </span>
                    </span>

                    {/* Label */}
                    <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
                        {item.label}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default GlassIcons;
