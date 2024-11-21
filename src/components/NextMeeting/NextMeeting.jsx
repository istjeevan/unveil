import React from "react";
import nextMeetingData from "./data"; // Adjust the path as needed

function NextMeeting() {
    const { title, date, meetingDetails } = nextMeetingData;

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 pb-8 px-6">
            <h3 className="text-gray-800 font-semibold mb-2 text-xl">{title}</h3>
            <div className="bg-purple-100 rounded-lg p-6 mt-8 w-full h-42 flex flex-col justify-between">
                <div className="font-bold grid text-purple-950">
                    <span className="text-xl" style={{ marginBottom: "-10px" }}>{date.month}</span>
                    <span className="text-4xl">{date.day}</span>
                </div>
                <div className="mt-4">
                    <p className="text-purple-950 font-medium">{meetingDetails.title}</p>
                    <p className="text-sm text-purple-900">{meetingDetails.time}</p>
                </div>
            </div>
        </div>
    );
}

export default NextMeeting;
