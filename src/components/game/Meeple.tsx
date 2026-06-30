/* The classic "meeple" board-game token silhouette. */
const Meeple = ({
    className = "",
    color = "currentColor",
    title,
}: {
    className?: string;
    color?: string;
    title?: string;
}) => (
    <svg
        viewBox="0 0 64 64"
        className={className}
        fill={color}
        role={title ? "img" : "presentation"}
        aria-label={title}
        aria-hidden={title ? undefined : true}
    >
        {title ? <title>{title}</title> : null}
        {/* head */}
        <circle cx="32" cy="13" r="10" />
        {/* arms + outstretched body */}
        <path d="M32 21c-6 0-9 3-11 8-2 4-6 6-11 7-3 .7-4 3-3 5 .8 1.7 3 2.4 5 1.8 4-1.2 7-2.7 10-5-1 4-3 8-6 12-2 2.6-1 5.6 1.6 6.4 1.8.6 3.6-.1 4.7-1.7L32 47l9.4 8.5c1.1 1.6 2.9 2.3 4.7 1.7 2.6-.8 3.6-3.8 1.6-6.4-3-4-5-8-6-12 3 2.3 6 3.8 10 5 2 .6 4.2-.1 5-1.8 1-2 0-4.3-3-5-5-1-9-3-11-7-2-5-5-8-11-8z" />
    </svg>
);

export default Meeple;
