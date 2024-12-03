export const TabButton = ({ tabName, isActive, icon, counts, onClick }) => (
    <button
        className={`flex items-center gap-2 bg-white duration-300 font-medium px-2 py-1 rounded-lg  transition-all
           ${isActive ? `border-2 text-[#45185a]` : `text-gray-400`}`}
        onClick={() => onClick(tabName)}
    >
        <span><img src={icon} alt="" className="w-4 h-4" /></span>
        <span>{tabName}</span>
        <span className={`text-base rounded-lg ${isActive ? `bg-purple-200` : `bg-white border-2`}`}
            style={{
                padding: `0 0.55rem`
            }}>
            {counts}
        </span>
    </button>
);
