import SignupBanner from "@/components/Login/SignupBanner";
import Image from "next/image";
import Link from "next/link";
import signup from '../../../public/assets/images/signup.png';
import '../../styles/AboutBanner.css';
const SignupPage = () => {
    
    return (
        <div>
            {/* Login Banner */}
            <SignupBanner/>

            {/* Login page code */}
            <section className="container mx-auto pt-[120px] pb-[90px]">
                <div className="flex flex-col items-center lg:flex-row-reverse ">
                    {/* Imgage part */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src={signup}
                            alt="Signup"
                            width={540}
                            height={540}
                        />
                    </div>
                    {/* Login form part */}
                    <div className="w-full lg:w-1/2">
                        <form>
                            <div className="mb-[25px]">
                                <p className="text-sm text-[#333] mb-1.5">Username</p>
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username"
                                    className="border border-[#e8e8e8] h-[60px] px-5 text-sm  w-full md:w-3/4" 
                                />
                            </div>
                            <div className="mb-[25px]">
                                <p className="text-sm text-[#333] mb-1.5">Email</p>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    className="border border-[#e8e8e8] h-[60px] px-5 text-sm w-full md:w-3/4" 
                                />
                            </div>
                            <div className="mb-[25px]">
                                <p className="text-sm text-[#333] mb-1.5">Password</p>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    className="border border-[#e8e8e8] h-[60px] px-5 text-sm w-full md:w-3/4" 
                                />
                            </div>
                            <div className="">
                                <input 
                                    type="submit" 
                                    value="Signup"
                                    className="bg-[#721b65] h-[60px] px-5 text-sm w-full md:w-3/4 text-white font-semibold hover:bg-[#ffd868] hover:text-[#721b65] duration-300 transition-all cursor-pointer" 
                                />
                            </div>
                        </form>
                        <div className="flex items-center justify-between mt-4 w-full lg:w-3/4">
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="remember" 
                                    id="remember" 
                                    className="" 
                                />
                                <span className="ml-1 text-[#8c8c8c] text-sm">Remember me</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="text-[#8c8c8c] text-sm">Already have an account?</p> <Link className="text-sm font-semibold text-[#721b65]" href={'/login'}>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignupPage;