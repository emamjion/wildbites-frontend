"use client";
import Swal from "sweetalert2";

import Button from "../Button";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire("Message Send!");
    }
    
    return (
        <div>
            <h1 className="text-[44px] font-bold">Send A Quest</h1>
            <div className="mt-[54px]">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center gap-[30px]">
                        <div className="lg:w-1/2">
                            <input 
                                type="text" 
                                name="name" id="" 
                                placeholder="Name*" 
                                className="px-5 py-1 border border-[#d7d7d7] h-[49px] w-full rounded-xl"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <input 
                                type="text" 
                                name="email" 
                                id="" placeholder="Email*" 
                                className="px-5 py-1 border border-[#d7d7d7] h-[49px] w-full rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="w-full mt-[30px]">
                        <input 
                            type="text" 
                            name="subject" 
                            id="" placeholder="Subject (Optional)" 
                            className="px-5 py-1 border border-[#d7d7d7] h-[49px] w-full rounded-xl"
                        />
                    </div>
                    <div className="mt-[30px]">
                        <textarea
                            placeholder="Message"
                            className="px-5 pt-4 pb-1 border border-[#d7d7d7] w-full rounded-xl h-[230px] resize-none"
                        >
                            
                        </textarea>
                        <div className="mt-[30px]">
                            <Button type="submit">Send Message</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;