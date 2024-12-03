
import React, { useState } from "react";
import Header from "../Header/Header";
import Frame from "../Frame/Frame";
import FrameBottom from "../FrameBottom/FrameBottom";
import Modal from "../Modal/Modal";
import Chatbot from "../../images/chatbot.png";
import Sidebar from "../Sidebar/Sidebar";
import unveil1 from "../../images/unveil_1.png";
import LeftSidebar1 from "../../images/svg/LeftSidebar1.svg";
import LeftSidebar2 from "../../images/svg/LeftSidebar2.svg";
import LeftSidebar3 from "../../images/svg/LeftSidebar3.svg";
import activeSidebar from "../../images/svg/activeSidebar.svg";


function MainScreen() {
    const [isModalOpen, setModalOpen] = useState(false);
    const setModalOpenHanlder = () => {
        setModalOpen(true);
    }

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-8">

            <div className="lg:col-span-1 border-r-2 h-screen flex flex-col sticky top-0 [@media(max-width:1027px)]:hidden">
                <div className="px-8 pt-9 pb-7">
                    <img src={unveil1} alt="unveil" className="w-[7rem]" />
                </div>

                <div className="flex-1 px-8 py-4">
                    <ul className="space-y-6">
                        <li className="flex items-end text-gray-800 hover:text-purple-600 cursor-pointer">

                            <span className="flex items-center justify-center mr-2 relative">
                            <img src={activeSidebar} alt=""  className="absolute left-[-32px]"/>

                                <img src={LeftSidebar1} alt="Companies" style={{width:'20px', maxWidth:"max-content"}} />
                            </span>
                            <span className="text-[#45185A] text-sm">
                                Companies
                            </span>
                        </li>
                        <li className="flex items-end text-gray-800 hover:text-purple-600 cursor-pointer">
                            <span className="flex items-center justify-center mr-2">
                                {/* Example icon */}
                                <img src={LeftSidebar2} alt="Companies" style={{width:'20px', maxWidth:"max-content"}} />
                            </span>
                            <span className="text-[#757575] text-sm">
                                Integrations
                            </span>
                        </li>
                        <li className="flex items-end text-gray-800 hover:text-purple-600 cursor-pointer">
                            <span className="flex items-center justify-center mr-2">
                                {/* Example icon */}
                                <img src={LeftSidebar3} alt="Companies" style={{width:'20px', maxWidth:"max-content"}} />
                            </span>
                            <span className="text-[#757575] text-sm">
                                Automations
                            </span>
                        </li>

                    </ul>
                </div>

                {/* Logout Section */}
                <div className="p-8">
                    <button className="text-[#757575] text-sm">
                        Log Out
                    </button>
                </div>
            </div>
            <div className="lg:col-span-7 px-8 pr-[3.5rem]">
                <Header />
                <Frame />
                <FrameBottom setModalOpenHanlder={setModalOpenHanlder} />
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
                <img src={Chatbot} alt="Chatbot" onClick={toggleSidebar} className={`fixed bottom-[3rem] right-[3rem] bg-purple-600 text-white rounded-full shadow-lg w-[4rem] h-[4rem] ${isSidebarOpen || isModalOpen ? `` : 'z-50'}`} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    );
}

export default MainScreen;
