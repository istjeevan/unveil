import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TabButton } from "./TabButton";
import ActivityContent from "./ActivityContent";
import MeetingsContent from "./MeetingsContent";
import EmailsContent from "./EmailsContent";
import { FilesContent } from "./FilesContent";
import pdfIcon from "../../images/document.png";
import { FormBottom } from "./data";
import CustomAccordion from "./CustomAccordion";

function FrameBottom() {
    const { heading, buttonName, tabsData } = FormBottom;
    const [activeTab, setActiveTab] = useState("Activity");
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [dynamicHeight, setDynamicHeight] = useState(900);
    const sideDivRef = useRef(null);

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        setSelectedActivity(null);
    };

    const handleActivityClick = (activity) => {
        setSelectedActivity(activity);
    };

    const updateHeight = (val) => {
        if(val){
            setDynamicHeight(val);
        }
    };


    return (
        <div className="max-w-8xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-10 gap-6 pt-0 relative">
            <div className="lg:col-span-7 z-0 shadow-lg lg:z-10 border rounded-lg">
                <div className="md:flex md:gap-6"
                    style={{ minHeight: `${dynamicHeight}px` }}
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
                        {activeTab === "Activity" && <ActivityContent icon={pdfIcon} onActivityClick={handleActivityClick} />}
                        {activeTab === "Meetings" && <MeetingsContent onActivityClick={handleActivityClick} />}
                        {activeTab === "Emails" && <EmailsContent icon={pdfIcon} onActivityClick={handleActivityClick} />}
                        {activeTab === "Files" && <FilesContent />}
                    </div>
                </div>
            </div>
            {selectedActivity && (
                <div className="lg:col-span-10 absolute right-0 bg-white shadow-lg rounded-lg p-6 mr-6 w-[75%] lg:w-[33%] border"
                    ref={sideDivRef}
                    style={{ minHeight: `${dynamicHeight}px` }}>
                    <div className="min-w-[350] max-w-[350]">
                        <div className="pl-[0] pt-8 lg:pl-[22%]">
                            <div className="border-b-2 pt-8 py-[12px]">
                                <p className="text-purple-950 font-semibold truncate">{
                                    activeTab == "Activity"
                                        ?
                                        selectedActivity.description
                                        : activeTab === "Meetings" || activeTab === "Emails"
                                            ? selectedActivity.title
                                            : ""
                                }</p>
                            </div>
                            {selectedActivity?.details && (
                                <CustomAccordion
                                    data={selectedActivity}
                                    activeTab={activeTab}
                                    updateHeight={updateHeight}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default FrameBottom;
