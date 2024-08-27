import ContactBanner from "@/components/Contact/ContactBanner";
import ContactForm from "@/components/Contact/ContactForm";
import { IoHomeOutline, IoMailOpenOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const ContactPage = () => {
    
    
    return (
        <div>
            {/* Contact page banner */}
            <ContactBanner/>

            {/* Contact us page section */}
            <section className="container mx-auto pt-[107px] pb-[120px]">
                <div className="flex gap-[30px]">
                    {/* info container */}
                    <div className="lg:w-1/2">
                        <h1 className="text-[44px] font-bold">We Are Here!</h1>
                        <h1 className="text-[44px] font-bold">Please Contact Us.</h1>
                        <div className="mt-11 space-y-7">
                            <div className="flex items-center gap-[30px] border border-[#d7d7d7] py-3 px-7 rounded-2xl">
                                <div className="w-16 h-16 bg-[#721b65] rounded-full flex items-center justify-center">
                                    <IoHomeOutline className="text-white text-3xl" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-medium mb-1">Address:</h1>
                                    <p>Dhanmondi, Dhaka</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[30px] border border-[#d7d7d7] py-3 px-7 rounded-2xl">
                                <div className="w-16 h-16 bg-[#721b65] rounded-full flex items-center justify-center">
                                    <MdOutlinePhoneInTalk className="text-white text-3xl" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-medium mb-1">Phone:</h1>
                                    <p>+880 1727 08 7717</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[30px] border border-[#d7d7d7] py-3 px-7 rounded-2xl">
                                <div className="w-16 h-16 bg-[#721b65] rounded-full flex items-center justify-center">
                                    <IoMailOpenOutline className="text-white text-3xl" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-medium mb-1">Email:</h1>
                                    <p>emamjion@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* form container */}
                    <div className="lg:w-1/2">
                        <ContactForm/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;