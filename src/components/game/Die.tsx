/* A single die face (values 1–6) drawn with pips. */
const PIP_LAYOUT: Record<number, [number, number][]> = {
    1: [[50, 50]],
    2: [[28, 28], [72, 72]],
    3: [[28, 28], [50, 50], [72, 72]],
    4: [[28, 28], [72, 28], [28, 72], [72, 72]],
    5: [[28, 28], [72, 28], [50, 50], [28, 72], [72, 72]],
    6: [[28, 26], [72, 26], [28, 50], [72, 50], [28, 74], [72, 74]],
};

const Die = ({
    value,
    className = "",
    faceColor = "#FBF6E9",
    pipColor = "#2B2620",
    title,
}: {
    value: number;
    className?: string;
    faceColor?: string;
    pipColor?: string;
    title?: string;
}) => {
    const v = Math.max(1, Math.min(6, Math.round(value)));
    const pips = PIP_LAYOUT[v];
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            role={title ? "img" : "presentation"}
            aria-label={title}
            aria-hidden={title ? undefined : true}
        >
            {title ? <title>{title}</title> : null}
            <rect
                x="6"
                y="6"
                width="88"
                height="88"
                rx="20"
                fill={faceColor}
                stroke="rgba(43,38,32,0.18)"
                strokeWidth="3"
            />
            {pips.map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="8.5" fill={pipColor} />
            ))}
        </svg>
    );
};

export default Die;
