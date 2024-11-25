import React, { useState } from "react";
import { meetingsData } from "./data"; // Import meetingsData from the data file

const MeetingsContent = ({ onActivityClick }) => {
    const [selectedId, setSelectedId] = useState(null);

    const onActivityClickHanlder = (val) => {
        let valId = val?.id || null;
        if (!selectedId || (selectedId && selectedId !== valId)) {
            setSelectedId(valId);
            onActivityClick(val);
        } else {
            setSelectedId(null);
            onActivityClick(null);
        }
    }
    return (
        <div className="mt-3">
            {meetingsData.map((section) => (
                <div key={section.year} className="mt-3">
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">{section.year}</h3>
                    <span className="border bg-gray-200 rounded-md px-1 text-gray-600">
                        {section.period}
                    </span>
                    <div className="mt-4 space-y-4">
                        {section.activities.map((meeting, index) => (
                            <div
                                key={index}
                                className={`p-4 pt-2 border-2 border-purple-400 rounded-lg ${selectedId == meeting.id ? `bg-purple-100` : ``}`}
                                onClick={() => onActivityClickHanlder(meeting)}
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`${meeting.status === "Attended"
                                            ? "bg-green-100 text-green-700 border-green-700"
                                            : "bg-gray-100 text-gray-700 border-gray-700"
                                            } rounded-md px-2 py-[1px] text-sm border`}
                                    >
                                        {meeting.status}
                                    </span>
                                    <div className="flex -space-x-2">
                                        {
                                            meeting.attendees.map((attendee, index) => {
                                                let color = attendee?.colorClass?.toString() || "#CB90FC";
                                                let lastItem = index + 1 == meeting.attendees.length;
                                                let inactiveColor = attendee?.inactiveColorClass?.toString() || "#CB90FC";
                                                return (
                                                    attendee.avatar ? (
                                                        <img
                                                            key={index}
                                                            src={attendee.avatar}
                                                            alt={attendee.name}
                                                            className="w-8 h-8 rounded-full border-2 border-white"
                                                        />
                                                    ) : lastItem
                                                        ? (
                                                            <div
                                                                key={index}
                                                                className={`w-8 h-8 rounded-full border-2 border-white flex justify-center items-center`}
                                                                style={{ backgroundColor: selectedId == meeting.id ? color : inactiveColor }}
                                                            >
                                                                <span>
                                                                    +2
                                                                </span>
                                                            </div>
                                                        )
                                                        : (
                                                            <div
                                                                key={index}
                                                                className={`w-8 h-8 rounded-full border-2 border-white`}
                                                                style={{ backgroundColor: color }}
                                                            />
                                                        )
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <p className="mt-2 text-lg font-semibold text-purple-950">{meeting.title}</p>
                                <p className="text-gray-400 font-semibold mt-2">{meeting.date}</p>
                                <p className="text-gray-400 font-semibold">{meeting.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MeetingsContent;