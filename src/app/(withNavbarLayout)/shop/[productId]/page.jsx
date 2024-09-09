import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const ProductDetails = async({params}) => {
    const res = await fetch(`http://localhost:5000/products/${params.productId}`);
    const product = await res.json();
    console.log(product);
    return (
        <section className="container mx-auto pt-[120px] pb-[90px]">
            <div>
                <div className="flex gap-[30px]">
                    {/* image part */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src={product.image}
                            alt=""
                            width={400}
                            height={520}
                            className="w-full"
                            
                        />
                    </div>
                    {/* text part */}
                    <div className="w-full lg:w-1/2">
                        <div>
                            <h1 className="text-[36px] mb-4">{product.title}</h1>
                            <div className="text-[36px] leading-normal font-bold text-[#721b65] mb-6">
                                $<span>{product.price}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>
                                    <Rating
                                        style={{ maxWidth: 80 }}
                                        value={product.rating}
                                        readOnly
                                    />
                                </p>
                                <p className="text-[#929191]">(5 Customer Review)</p>
                            </div>
                            <div className="border-b border-[#e8e8e8] my-8"></div>
                            <div className="space-y-2">
                                <p className="mb-6">{product.description}</p>
                                <p>Categories: <span>Pet Food</span></p>
                                <p>Tags: PeftFood, Pet, Animal</p>
                            </div>
                            <div className="flex items-center gap-3 mt-[30px]">
                                <div className="bg-accent-hover px-6 py-2 flex items-center gap-4">
                                    <button className="text-lg font-medium text-[#721b65]"> - </button>
                                    <p className="text-lg font-medium text-[#721b65]">0</p>
                                    <button className="text-lg font-medium text-[#721b65]">+</button>
                                </div>
                                <div>
                                    <button className="bg-[#721b65] px-1.5 py-0.5 rounded-md w-[170px] h-[50px] text-white font-bold hover:bg-accent-hover hover:text-[#721b65] duration-300">ADD TO CART</button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="w-[50px] h-[50px] rounded-md flex items-center justify-center bg-accent-hover hover:bg-[#721b65] hover:text-white duration-300">
                                        <IoMdHeartEmpty className="text-lg"/>
                                    </button>
                                    <button className="w-[50px] h-[50px] rounded-md flex items-center justify-center bg-accent-hover hover:bg-[#721b65] hover:text-white duration-300">
                                        <IoEyeOutline className="text-lg"/>
                                    </button>
                                </div>
                            </div>
                            {/* Description and Information */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;