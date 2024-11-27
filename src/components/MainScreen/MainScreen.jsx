
import React, { useState } from "react";
import Header from "../Header/Header";
import Frame from "../Frame/Frame";
import FrameBottom from "../FrameBottom/FrameBottom";
import Modal from "../Modal/Modal";
import Chatbot from "../../images/chatbot.png";
import Sidebar from "../Sidebar/Sidebar";

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
        <div className="px-8">
            <Header />
            <Frame />
            <FrameBottom setModalOpenHanlder={setModalOpenHanlder} />
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            <img src={Chatbot} alt="Chatbot" onClick={toggleSidebar} className={`fixed bottom-[3rem] right-[1.8rem] bg-purple-600 text-white rounded-full shadow-lg w-[4rem] h-[4rem] ${isSidebarOpen || isModalOpen ? `` : 'z-50'}`} style={{cursor: 'pointer'}}/>
        </div>
    );
}

export default MainScreen;
