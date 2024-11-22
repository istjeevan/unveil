export const TabButton = ({ tabName, isActive, icon, counts, onClick }) => (
    <button
        className={`flex items-center gap-2 bg-white duration-300 font-medium px-2 py-1 rounded-md text-lg text-gray-400 transition-all
           ${isActive ? `border-2 text-purple-950` : ``}`}
        onClick={() => onClick(tabName)}
    >
        <span><img src={icon} alt="" className="w-4 h-4"/></span>
        <span>{tabName}</span>
        <span className={`text-base px-2 rounded-lg ${isActive ? `bg-purple-200` : `bg-white border-2`}`}>
            {counts}
        </span>
    </button>
);
