"use client";

import Login from "@/components/Login/Login";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import login from '../../../public/assets/images/login.png';



const LoginPage = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit = (data) => {
        const loggedUser = {
            email: data.email,
            password: data.password,
        }

        fetch('https://wildbites-backend.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(loggedUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push('/');
                reset();
            }
        })
    }
    return (
        <div>
            {/* Login Banner */}
            <Login/>

            {/* Login page code */}
            <section className="container mx-auto pt-[120px] pb-[90px]">
                <div className="flex flex-col lg:flex-row items-center gap-[30px]">
                    {/* Imgage part */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src={login}
                            alt="Login"
                            width={540}
                            height={540}
                        />
                    </div>
                    {/* Login form part */}
                    <div className="w-full lg:w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-[25px]">
                                <p className="text-sm text-[#333] mb-1.5">Email</p>
                                <input 
                                    type="email" 
                                    id="email"
                                    className="border border-[#e8e8e8] h-[60px] px-5 text-sm w-full md:w-3/4"
                                    {...register("email", { required: true })} 
                                />
                            </div>
                            <div className="mb-[25px]">
                                <p className="text-sm text-[#333] mb-1.5">Password</p>
                                <input 
                                    type="password"  
                                    id="password"
                                    className="border border-[#e8e8e8] h-[60px] px-5 text-sm w-full md:w-3/4"
                                    {...register("password", { required: true })} 
                                />
                            </div>
                            <div className="">
                                <input 
                                    type="submit" 
                                    value="LOGIN"
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
                                <p className="text-[#8c8c8c] text-sm">Haven't any account?</p> <Link className="text-sm font-semibold text-[#721b65]" href={'/signup'}>Signup</Link>
                            </div>
                        </div>
                        {/* Social Login */}
                        <div className="w-full lg:w-3/4">
                            <div className="border-b border-[#e8e8e8]  my-6"></div>
                            <SocialLogin/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;