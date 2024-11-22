import React, { useEffect, useState } from "react";
import { activityData } from "./data";

const ActivityContent = ({ icon }) => {
    return (
        <div className="mt-3">
            {activityData.map((section) => (
                <div key={section.year} className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">{section.year}</h3>
                    <span className="border bg-gray-200 rounded-md px-1 text-gray-600">
                        {section.period}
                    </span>
                    <div className="mt-4 space-y-4">
                        {section.activities.map((activity, index) => (
                            <div
                                key={index}
                                className={`p-4 pt-2 border-2 border-purple-400 rounded-lg`}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="mt-2 text-lg font-semibold text-purple-950">{activity.title}</p>
                                    <button className="border border-gray-400 bg-gray-200 rounded-md px-1 text-gray-600">
                                        {activity.type}
                                    </button>
                                </div>
                                <p className="text-gray-400">{activity.subHeading}{" "}{activity.description}</p>
                                {activity.iconLabel && (
                                    <span className="bg-white border inline-flex items-center px-1 rounded-md text-gray-600 mt-1">
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

export default ActivityContent;