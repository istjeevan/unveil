import React from "react";
import nextMeetingData from "./data";

function NextMeeting() {
    const { title, date, meetingDetails } = nextMeetingData;

    return (
        <div className="bg-white rounded-lg shadow-lg pt-4 pb-8 px-6 border [@media(max-width:1453px)]:pb-10"
            style={{
                boxShadow: "-25px 36px 20px rgba(0, 0, 255, 0.05)",
            }}>
            <h3 className="text-[#212529] font-semibold mt-2 mb-4 text-xl">{title}</h3>
            <div className="bg-[#EEEBF1] rounded-xl p-6 mt-8 w-full h-42 flex flex-col justify-between">
                <div className="font-bold grid text-[#45185A]">
                    <span className="text-xl" style={{ marginBottom: "-10px", fontSize: `1.10rem` }}>{date.month}</span>
                    <span className="text-4xl">{date.day}</span>
                </div>
                <div className="mt-6 [@media(max-width:1453px)]:mt-[36px]">
                    <p className="font-semibold text-[#45185A] text-sm">{meetingDetails.title}</p>
                    <p className="text-xs text-[#45185A]">{meetingDetails.time}</p>
                </div>
            </div>
        </div>
    );
}

export default NextMeeting;
