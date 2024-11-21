import React, { useState } from "react";
import { TabButton } from "./TabButton";
import { ActivityContent } from "./ActivityContent";
import { MeetingsContent } from "./MeetingsContent";
import { EmailsContent } from "./EmailsContent";
import { FilesContent } from "./FilesContent";
import pdfIcon from "../../images/document.png"
function FrameBottom() {
    const [heading, setHeading] = useState("Interactions");
    const [buttonName, setButtonName] = useState("Add Context");
    const [activeTab, setActiveTab] = useState("Activity");
    const [tabsData, setTabsData] = useState([
        {
            id: 1,
            title: "Activity",
            count: 2
        },
        {
            id: 2,
            title: "Meetings",
            count: 3
        },
        {
            id: 3,
            title: "Emails",
            count: 2
        },
        {
            id: 4,
            title: "Files",
            count: 3
        },
    ])

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="max-w-8xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-8 gap-6 pt-0">
            {/* Main Content */}
            <div className="lg:col-span-6">
                <div className="md:flex md:gap-6">
                    <div className="flex-1 bg-white shadow-lg rounded-t-lg p-6 border-b-2">
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="text-xl font-bold">{heading}</h2>
                            <button className={`bg-purple-400 text-purple-950 px-2 py-1 rounded-md text-sm font-medium flex gap-2 items-center`}>
                                <span className="font-extrabold text-xl" style={{ marginTop: `-5px` }}>+</span>
                                <span>{buttonName}</span>
                            </button>
                        </div>
                        <div className="flex space-x-4 mb-6 border-b-2 border-gray-200 pb-4">
                            {tabsData.map((tab) => (
                                <TabButton
                                    key={tab.id}
                                    tabName={tab.title}
                                    isActive={activeTab === tab.title}
                                    counts={tab.count}
                                    icon=""
                                    onClick={handleTabChange}
                                />
                            ))}
                        </div>
                        {activeTab === "Activity" && <ActivityContent icon={pdfIcon} />}
                        {activeTab === "Meetings" && <MeetingsContent />}
                        {activeTab === "Emails" && <EmailsContent />}
                        {activeTab === "Files" && <FilesContent />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FrameBottom;
