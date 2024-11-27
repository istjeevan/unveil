import React, { useEffect } from "react";
import DownArrow from "../../images/svg/DownArrow.svg";
import modalContent from "./data"; // Import the static data file

function Modal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#f2f4f6] bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white md:w-1/2 w-3/4 p-6 rounded-lg shadow-lg relative max-h-[50%] sm:max-h-full overflow-y-auto">
        <div className="flex justify-between items-start mb-1">
          <h2 className="text-xl font-bold">{modalContent.title}</h2>
          <button onClick={onClose} className="text-gray-400">
            ✕
          </button>
        </div>
        <p className="text-gray-600 mb-6 tracking-normal">
          {modalContent.description}
        </p>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            {modalContent.labels.interactionType}
          </label>
          <div className="border-2 border-gray-150 rounded-md py-2.5 px-2 flex justify-between items-center w-[7.5rem]">
            <span className="px-2">{modalContent.interactionOptions[0]}</span>
            <span>
              <img src={DownArrow} alt="" className="mr-1" />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            {modalContent.labels.context}
          </label>
          <textarea
            placeholder={modalContent.placeholders.context}
            className="w-full border-2 border-gray-150 rounded-md px-4 py-2 h-32 tracking-[0.045em]"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            {modalContent.labels.tips}{" "}
            <span className="font-thin italic text-gray-400">
              {modalContent.labels.optional}
            </span>
          </label>
          <textarea
            placeholder={modalContent.placeholders.tips}
            className="w-full border-2 border-gray-150 rounded-md px-4 py-2 h-32 tracking-[0.065em] [@media(max-width:1405px)]:tracking-[0.045em]"
          />
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={onClose}
            className="text-gray-500 font-semibold border-2 border-gray-150 bg-white px-4 py-2.5 rounded-lg mr-2 w-1/2"
          >
            {modalContent.buttons.cancel}
          </button>
          <button className="bg-[#45185A] text-white px-4 py-2.5 rounded-lg w-1/2">
            {modalContent.buttons.add}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
