import React from "react";
import nextMeetingData from "./data";

function NextMeeting() {
    const { title, date, meetingDetails } = nextMeetingData;

    return (
        <div className="bg-white rounded-lg shadow-lg pt-4 pb-8 px-6 border [@media(max-width:1453px)]:pb-10">
            <h3 className="text-gray-800 font-semibold mt-2 mb-4 text-xl">{title}</h3>
            <div className="bg-purple-100 rounded-lg p-6 mt-8 w-full h-42 flex flex-col justify-between">
                <div className="font-bold grid text-purple-950">
                    <span className="text-xl" style={{ marginBottom: "-10px" }}>{date.month}</span>
                    <span className="text-4xl">{date.day}</span>
                </div>
                <div className="mt-6 [@media(max-width:1453px)]:mt-[40px]">
                    <p className="text-purple-950 font-medium">{meetingDetails.title}</p>
                    <p className="text-sm text-purple-900">{meetingDetails.time}</p>
                </div>
            </div>
        </div>
    );
}

export default NextMeeting;
