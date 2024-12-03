import React from "react";

function LeftSidebar({ isStatic }) {
    return (
        <div
            className={`${
                isStatic ? "w-64 fixed h-full bg-gray-100 shadow-md" : "hidden"
            }`}
        >
            {/* Sidebar content */}
            <div className="p-4">
                <h2 className="text-xl font-bold">Menu</h2>
                <ul className="mt-4 space-y-2">
                    <li className="hover:text-purple-600 cursor-pointer">Companies</li>
                    <li className="hover:text-purple-600 cursor-pointer">Integrations</li>
                    <li className="hover:text-purple-600 cursor-pointer">Automations</li>
                </ul>
            </div>
        </div>
    );
}

export default LeftSidebar;
