"use client";
import { signIn } from 'next-auth/react';
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-[30px]">
                <button className="w-10 h-10 bg-[#f1f1f1] flex items-center justify-center rounded-full">
                    <FaFacebookF className="text-lg text-[#1877F2]"/>
                </button>
                <button onClick={() =>signIn("google", {
                    callbackUrl: "http://localhost:3000/"
                })} className="w-10 h-10 bg-[#f1f1f1] flex items-center justify-center rounded-full">
                    <FaGoogle className="text-xl text-[#4285F4]"/>
                </button>
                <button onClick={() =>signIn("github", {
                    callbackUrl: "http://localhost:3000/"
                })} className="w-10 h-10 bg-[#f1f1f1] flex items-center justify-center rounded-full">
                    <FaGithub className="text-xl text-[#2B3137]"/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;