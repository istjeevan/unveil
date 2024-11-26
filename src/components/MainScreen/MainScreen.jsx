import React from "react";
import Header from "../Header/Header";
import Frame from "../Frame/Frame";
import FrameBottom from "../FrameBottom/FrameBottom";

function MainScreen() {
    return (
        <div className="px-8">
            <Header />
            <Frame />
            <FrameBottom />
        </div>
    );
}

export default MainScreen;
