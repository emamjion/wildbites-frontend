import { FaDribbble, FaFacebookF, FaMapMarkerAlt, FaMobile, FaPinterestP, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="bg-[#474654]">
            <div className="container mx-auto">
                {/* Footer 1 content */}
                <div className="pt-[104px] pb-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    <div className="text-white">
                        <h1 className="text-3xl font-semibold mb-5">About Us</h1>
                        <p className="my-6">
                            At Wildbites, we offer premium pet food made with high-quality to ensure optimal health for your furry friends.
                        </p>
                        {/* Social icon */}
                        <div className="flex items-center gap-3">
                            <div className="bg-white w-9 h-9 rounded-md flex items-center justify-center cursor-pointer hover:bg-accent-hover duration-300">
                                <FaFacebookF className="text-xl text-[#721b65]"/>
                            </div>
                            <div className="bg-white w-9 h-9 rounded-md flex items-center justify-center cursor-pointer hover:bg-accent-hover duration-300">
                                <FaDribbble className="text-xl text-[#721b65]"/>
                            </div>
                           <div className="bg-white w-9 h-9 rounded-md flex items-center justify-center cursor-pointer hover:bg-accent-hover duration-300">
                                <FaPinterestP className="text-xl text-[#721b65]"/>
                           </div>
                            <div className="bg-white w-9 h-9 rounded-md flex items-center justify-center cursor-pointer hover:bg-accent-hover duration-300">
                                <FaTwitter className="text-xl text-[#721b65]"/>
                            </div>
                        </div>
                    </div>
                    <div className="text-white">
                        <h1 className="text-3xl font-semibold mb-5">Information</h1>
                        <ul>
                            <li>
                                About Us
                            </li> 
                            <li>
                                Delivery Information
                            </li> 
                            <li>
                                Privacy Policy
                            </li> 
                            <li>
                                Terms & Conditions
                            </li> 
                            <li>
                                Contact Us
                            </li> 
                            <li>
                                Log in Info
                            </li> 
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="text-3xl font-semibold mb-5">Our Policy</h1>
                        <ul>
                            <li>
                                Gallery
                            </li> 
                            <li>
                                Brands
                            </li> 
                            <li>
                                Get Certificates
                            </li> 
                            <li>
                                Speciats
                            </li> 
                            <li>
                                My Account Us
                            </li> 
                            <li>
                                About Us
                            </li> 
                        </ul>
                    </div>
                    <div className="text-white">
                        <h1 className="text-3xl font-semibold mb-5">Contact Info:</h1>
                        <p className="mb-8">
                            <span>If you have any question. please contact us at</span> <span className="text-accent">wildbites@gmail.com</span>
                        </p>
                        <div>
                            <div className="flex gap-4">
                                <div className="w-[50px] h-[50px] bg-accent flex items-center justify-center rounded-md">
                                    <FaMapMarkerAlt className="text-[#721b65] text-2xl"/>
                                </div>
                                <div>
                                    <p>Dhanmondi, Dhaka</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-7">
                                <div className="w-[50px] h-[50px] bg-accent flex items-center justify-center rounded-md">
                                    <FaMobile className="text-[#721b65] text-2xl"/>
                                </div>
                                <div>
                                    <p>Have any Question</p>
                                    <p>+880 1727 08 7717</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer border section */}
                <div className="border-b border-[#999999]"></div>
                <div className="py-5">
                    <p className="text-center text-[#a1a1a1]">&copy; wildbites. Made with ❤️ by Emam Khalid.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;