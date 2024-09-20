export default function Anchor({ Link, Content }) {
    return (
        <a  href={ Link }
            className="bg-[#E3EBF2] text-[#000000] rounded-[10px]
                        hover:bg-[var(--vtr-poca)] hover:text-[var(--vtr-baleia)]
                        px-[8px] hover:px-[10px]
                        transition-all duration-300">
        { Content }
        </a>
    )
};