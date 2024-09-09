"use client";
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

const LogoutButton = ({session}) => {
    return (
        <div>
            {
                session?.user ? (
                    <button onClick={() => signOut()} className="flex items-center gap-1 bg-[#721b65] px-6 py-2 rounded-md text-white font-semibold hover:bg-accent hover:text-[#721b65] duration-300">
                <span>
                    <MdLogout/>
                </span>
                <span>Logout</span>
            </button>
                )
                :
                (
                    <button className="flex items-center gap-1 bg-[#721b65] px-6 py-2 rounded-md text-white font-semibold hover:bg-accent hover:text-[#721b65] duration-300">
                        <span>Login</span>
                        <span>
                            <MdLogout/>
                        </span>
                    </button>
                )
            }
            
            
            
        </div>
    );
};

export default LogoutButton;