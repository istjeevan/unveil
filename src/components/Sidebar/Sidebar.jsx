import React from "react";
import DownArrow from "../../images/svg/DownArrow.svg";
import AiIconFilled from "../../images/svg/AiIconFilled.svg";
import MessageArrow from "../../images/svg/MessageArrow.svg";
import SeeMoreArrow from "../../images/svg/SeeMoreArrow.svg";
import Like from "../../images/svg/Like.svg";
import Dislike from "../../images/svg/Dislike.svg";
import Copy from "../../images/svg/Copy.svg";
import sidebarContent from "./data"; // Import static content

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`border-2 border-purple-300 rounded-lg fixed top-0 right-0 h-full w-[22rem] bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50 overflow-hidden`}
    >
      {/* Header Section */}
      <div className="border-b-2 border-purple-300">
        <div className="flex justify-between items-center mb-1 px-4 py-4">
          <h2 className="text-md font-semibold text-purple-950">
            {sidebarContent.header.title}
          </h2>
          <div className="flex items-center gap-4">
            {/* Dropdown */}
            <div className="border-2 border-gray-150 rounded-lg py-0.5 px-1.5 pl-2 flex justify-between items-center">
              <span className="font-semibold text-gray-400">
                {sidebarContent.header.dropdownLabel}
              </span>
              <span>
                <img src={DownArrow} alt="Dropdown Icon" className="w-4 ml-2" />
              </span>
            </div>
            {/* Close Button */}
            <button onClick={onClose} className="text-gray-400">
              ✕
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 max-h-[80%] overflow-y-auto scrollbar-none pb-4">
        {/* Copilot Intro */}
        <span className="pt-4 pb-2 flex gap-1 items-center">
          <img src={AiIconFilled} alt="" />
          <p className="text-purple-950 font-semibold">
            {sidebarContent.copilotIntro.title}
          </p>
        </span>
        <p className="pb-4 text-purple-950 font-medium text-sm">
          {sidebarContent.copilotIntro.description}
        </p>

        {/* Prompts */}
        <div className="space-y-2">
          {sidebarContent.prompts.map((prompt, index) => (
            <button
              key={index}
              className={`${
                prompt === "Show more prompts" ? "flex items-center" : ""
              } bg-white border-2 font-medium px-2 py-1 rounded-lg text-left ${
                prompt === "Show more prompts" ? "text-gray-400" : "text-purple-400"
              } text-xs`}
            >
              <span>{prompt}</span>
              {prompt === "Show more prompts" && (
                <span>
                  <img src={SeeMoreArrow} alt="->" className="w-3 ml-2" />
                </span>
              )}
            </button>
          ))}
        </div>

        {/* User's Question */}
        <div className="flex justify-end mt-8">
          <div className="bg-gray-100 border-2 text-gray-700 font-medium text-sm py-1 px-2 rounded-lg max-w-[75%]">
            {sidebarContent.userQuestion}
          </div>
        </div>

        {/* Copilot Reply */}
        <div className="mt-6">
          <span className="pt-4 pb-2 flex gap-1 items-center">
            <img src={AiIconFilled} alt="" />
            <p className="text-purple-950 font-semibold">
              {sidebarContent.copilotIntro.title}
            </p>
          </span>
          <p className="text-purple-950 font-medium">
            {sidebarContent.copilotReply.message}
          </p>
          <button className="mt-2 flex items-center bg-white border-2 font-medium px-2 py-1 rounded-lg text-left text-gray-400 text-xs">
            <span>{sidebarContent.copilotReply.contextButton}</span>
            <span>
              <img src={SeeMoreArrow} alt="->" className="w-3 ml-2" />
            </span>
          </button>

          {/* Feedback Buttons */}
          <div className="flex gap-3 mt-3 mb-8 pb-4">
            <button className="flex items-center justify-center">
              <img src={Like} alt="Like" />
            </button>
            <button className="flex items-center justify-center">
              <img src={Dislike} alt="Dislike" />
            </button>
            <button className="flex items-center justify-center">
              <img src={Copy} alt="Copy" />
            </button>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="absolute bottom-0 left-0 right-0 border-purple-300 p-4 bg-white">
        <div className="flex items-center bg-purple-50 border border-purple-300 rounded-[0.8rem] px-4 py-3">
          <input
            type="text"
            placeholder={sidebarContent.inputPlaceholder}
            className="flex-1 bg-transparent outline-none text-sm text-purple-600 placeholder-purple-400 tracking-wide"
          />
          <button className="text-purple-700">
            <img src={MessageArrow} alt="->" className="w-[1.5rem]" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 w-full text-center">
          {sidebarContent.footerNote}
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
