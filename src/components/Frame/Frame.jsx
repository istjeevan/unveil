import React from "react";
import Overview from "../Overview/Overview";
import Actions from "../ActionItems/ActionItems";
import NextMeeting from "../NextMeeting/NextMeeting";
import KeyContacts from "../KeyContacts/KeyContacts";

function Frame() {
    return (
        <div className="max-w-8xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-10 gap-[2rem]">
            {/* Main Content */}
            <div className="lg:col-span-7">
                <Overview />
                <Actions />
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3 space-y-9">
                <NextMeeting />
                <KeyContacts />
            </div>
        </div>
    );
}

export default Frame;
