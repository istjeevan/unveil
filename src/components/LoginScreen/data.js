
import React from "react";
import unveil from "../../images/unveil_1.png";
import Google from "../../images/svg/Google.svg";
import PasswordHide from "../../images/svg/PasswordHide.svg";



const loginStaticData = {
    logo: {
      src: unveil,
      alt: "unveil",
    },
    headings: {
      main: ["Sales Insights,", "Instantly."],
      sub: [
        "Don't have an account?",
        'Learn more <span className="text-[#CB90FC] cursor-pointer">here.</span>',
      ],
    },
    inputs: {
      email: {
        type: "email",
        placeholder: "cooldude@acme.ai",
      },
      password: {
        type: "password",
        placeholder: "**********",
      },
    },
    button: {
      text: "Login",
      style: {
        boxShadow: "0 0 25px 0 #4da7c3",
      },
    },
    googleSignIn: {
      src: Google,
      alt: "Google",
    },
    icons: {
      passwordHide: PasswordHide,
      alt: "👁️",
    },
    forgotPassword: "Forgot your password?",
    continueText: "or continue with",
  };
  
  export default loginStaticData;
  