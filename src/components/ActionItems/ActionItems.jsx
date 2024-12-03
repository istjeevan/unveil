import React, { useState } from "react";
import { actionsData } from "./data"; 
const Actions = () => {
    const { heading, actionItems } = actionsData;

    const [data, setData] = useState(actionItems)

    const handleCheckBoxChange = (id) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setData(updatedData);
    };

    return (
        <div className="md:flex md:gap-6">
            <div className="flex-1 bg-white shadow-lg p-6 rounded-b-lg border">
                <h2 className="font-medium mb-4 text-gray-400 text-xl">{heading}</h2>
                <ul className="pt-3 text-gray-700">
                    {data.map((item) => {
                        let checked = item.checked;
                        return (
                            <li key={item.id} className="mb-2 flex items-center gap-2 font-medium">
                                <div className="inline-flex items-center">
                                    <label className="flex items-center cursor-pointer relative">
                                        <input
                                            type="checkbox"
                                            defaultChecked={checked}
                                            className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow-lg hover:shadow-lg-md border-2 border-purple-400 checked:bg-white checked:border-gray-400"
                                            id={item.id}
                                            onChange={() => handleCheckBoxChange(item.id)}
                                        />
                                        <span className="absolute text-gray-400 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                                <span className={checked ? `line-through text-gray-400` : `text-purple-950`}>
                                    {item.assignee
                                        ? <span className="text-[#45185A] px-2 bg-purple-100 rounded text-sm font-medium py-1 mr-2">
                                            {item.assignee}
                                        </span>
                                        : ""}
                                    {item.action}
                                    {item.time
                                        ? <span className="rounded text-sm font-medium ml-2 underline">
                                            {item.time}
                                        </span>
                                        : ""}
                                </span>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Actions;
