import React from "react";
import loginStaticData from "./data";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate()
  const {
    logo,
    headings,
    inputs,
    button,
    googleSignIn,
    icons,
    forgotPassword,
    continueText,
  } = loginStaticData;

  return (
    <div className="max-w-8xl p-4 mx-auto">
      {/* Logo Section */}
      <div className="flex">
        <img src={logo.src} alt={logo.alt} className="w-[7rem]" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-8 mt-[15%]">
        {/* Left Side Content */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="flex items-center text-white px-10 lg:px-16 xl:px-28 mb-4">
            <div className="flex flex-col text-black space-y-14">
              {/* Heading */}
              <div
                className="font-[800] flex flex-col space-y-2"
                style={{
                  backgroundColor: "transparent",
                  fontSize: "3.2rem",
                  lineHeight: "3rem",
                }}
              >
                {headings.main.map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
              </div>

              {/* Subtext */}
              <div className="flex flex-col text-black">
                <span className="text-lg">{headings.sub[0]}</span>
                <span
                  className="text-lg"
                  dangerouslySetInnerHTML={{ __html: headings.sub[1] }}
                ></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          <div className="flex items-center text-white px-4 lg:px-10">
            <div className="flex flex-col text-black w-full max-w-sm">
              {/* Email Input */}
              <input
                type={inputs.email.type}
                placeholder={inputs.email.placeholder}
                className="placeholder-[#cb90fc] bg-[#F1EEF6] text-[#2F0E60] min-w-full px-4 py-4 rounded-xl focus:outline-none text-sm"
              />

              {/* Password Input */}
              <div className="flex flex-col mt-8">
                <div className="relative flex items-center">
                  <input
                    type={inputs.password.type}
                    placeholder={inputs.password.placeholder}
                    className="placeholder-[#cb90fc] bg-[#F1EEF6] text-[#2F0E60] min-w-full px-4 py-4 rounded-xl focus:outline-none text-sm"
                  />
                  <span className="absolute right-4 text-[#9C9C9C] cursor-pointer">
                    <img src={icons.passwordHide} alt={icons.alt} />
                  </span>
                </div>

                {/* Forgot Password */}
                <span className="text-right text-[#9C9C9C] text-xs cursor-pointer mt-2">
                  {forgotPassword}
                </span>
              </div>

              {/* Login Button */}
              <button
                className="bg-[#45185a] mt-12 text-sm text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition mt-8"
                style={button.style}
                onClick={() => navigate('/home')}
              >
                {button.text}
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center mt-8">
                <span className="text-gray-500 font-semibold text-sm">
                  {continueText}
                </span>
              </div>

              {/* Google Sign-In */}
              <div className="flex justify-center mt-6">
                <img
                  src={googleSignIn.src}
                  alt={googleSignIn.alt}
                  className="w-8 h-8 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
