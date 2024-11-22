import React, { useEffect, useState } from "react";
import { TabButton } from "./TabButton";
import ActivityContent from "./ActivityContent";
import MeetingsContent from "./MeetingsContent";
import EmailsContent from "./EmailsContent";
import { FilesContent } from "./FilesContent";
import pdfIcon from "../../images/document.png";
import { FormBottom } from "./data";

function FrameBottom() {
    const { heading, buttonName, tabsData } = FormBottom;
    const [activeTab, setActiveTab] = useState("Activity");

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };



    return (
        <div className="max-w-8xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-8 gap-6 pt-0 relative">
            <div className="lg:col-span-6 z-10 shadow-lg">
                <div className="md:flex md:gap-6"
                    style={{ minHeight: `544px` }}
                >
                    <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="text-xl font-bold">{heading}</h2>
                            <button className={`bg-purple-400 text-purple-950 px-2 py-1 rounded-md text-sm font-medium flex gap-2 items-center`}>
                                <span className="font-extrabold text-xl" style={{ marginTop: `-5px` }}>+</span>
                                <span>{buttonName}</span>
                            </button>
                        </div>
                        <div className="flex space-x-4 mb-6 border-b-2 border-gray-200 pb-4 max-w-full overflow-x-auto">
                            {tabsData.map((tab) => (
                                <TabButton
                                    key={tab.id}
                                    tabName={tab.title}
                                    isActive={activeTab === tab.title}
                                    counts={tab.count}
                                    icon={activeTab === tab.title ? tab.activeIcon : tab.inativeIcon}
                                    onClick={handleTabChange}
                                />
                            ))}
                        </div>
                        {activeTab === "Activity" && <ActivityContent icon={pdfIcon} />}
                        {activeTab === "Meetings" && <MeetingsContent />}
                        {activeTab === "Emails" && <EmailsContent icon={pdfIcon} />}
                        {activeTab === "Files" && <FilesContent />}
                    </div>
                </div>
            </div>
            {/* {true && (
                <div className="lg:col-span-8 absolute right-0 bg-white shadow-lg rounded-lg p-6 mr-6 w-[28%]"
                    style={{ minHeight: `544px` }}>
                    <div className="min-w-[350] max-w-[350]">
                    </div>
                </div>
            )} */}
        </div>
    )
}
export default FrameBottom;
