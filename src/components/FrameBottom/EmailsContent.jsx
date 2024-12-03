import React, { useEffect, useState } from "react";
import { emailsData } from "./data";

const EmailsContent = ({ icon, onActivityClick, cleanup,setCleanup }) => {
    const [selectedId, setSelectedId] = useState(null);

    const onActivityClickHanlder = (val) => {
        let valId = val?.id || null;
        if (!selectedId || (selectedId && selectedId !== valId)) {
            setSelectedId(valId);
            onActivityClick(val);
        } else {
            setSelectedId(null);
            onActivityClick(null);
            setCleanup(null)

        }
    }

    useEffect(() =>{
        onActivityClickHanlder(emailsData[0].activities[0])
    },[])

    useEffect(() => {
        if (cleanup) {
            setSelectedId(null);
            setCleanup(null)
        }
    }, [cleanup]);

    return (
        <div className="mt-3">
            {emailsData.map((section) => (
                <div key={section.year} className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">{section.year}</h3>
                    <span className="border bg-gray-200 rounded-md px-1 text-gray-600">
                        {section.period}
                    </span>
                    <div className="mt-4 space-y-4">
                        {section.activities.map((activity, index) => (
                            <div
                                key={index}
                                className={`p-4 border-2 border-purple-300 rounded-lg shadow-sm ${selectedId == activity.id ? `bg-purple-100` : ``}`}
                                onClick={() => onActivityClickHanlder(activity)}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-semibold text-purple-950">{activity.title}</p>
                                    <button className="bg-gray-100 text-gray-600 text-sm rounded-md px-1 py-[1px]">
                                        {activity.date}
                                    </button>
                                </div>
                                <span className="text-xs font-thin text-purple-400">{activity.subTitle}</span>

                                <p className="mt-2 text-sm font-semibold text-[#868E96]">{activity.description}</p>
                                {activity.iconLabel && (
                                    <span className="border inline-flex items-center px-2 rounded-md text-gray-600 mt-2 text-sm">
                                        <img src={icon} alt="call" className="w-3 h-3" />
                                        <span className="ml-1">{activity.iconLabel}</span>
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default EmailsContent;
