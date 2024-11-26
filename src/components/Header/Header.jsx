import React from "react";
import headerImg from "../../images/headerImg.png";
import headerData from "./data";

function Header() {
    const { breadcrumb, logoAlt, companyName, stats } = headerData;

    return (
        <div className="max-w-8xl mx-auto py-4 px-6 bg-white sticky top-0 z-50">
            <span className="text-xs text-gray-500">{breadcrumb}</span>
            <div className="flex justify-between items-center min-w-[300px] overflow-x-auto">
                <div className="flex items-center space-x-4 min-w-[180px]">
                    <div className="flex items-center space-x-2">
                        <img src={headerImg} alt={logoAlt} className="w-7 h-7" />
                        <span className="text-[32px] font-bold text-gray-800">{companyName}</span>
                    </div>
                </div>

                <div className="flex space-x-10 min-w-[420px]">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <p className="text-xs font-semibold text-gray-500">{stat.label}</p>
                            <p className="text-xs text-gray-500">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
