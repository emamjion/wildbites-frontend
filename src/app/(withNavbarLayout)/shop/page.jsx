import ShopBanner from "@/components/Shop/ShopBanner";
import Image from "next/image";
import Link from "next/link";
import { PiHeartThin } from "react-icons/pi";

const ShopPage = async() => {
    // const pathname = usePathname();
    const res = await fetch('http://localhost:5000/products/');
    const products = await res.json();
    return (
        <div>
            {/* Shop banner section */}
            <ShopBanner />

            {/* Shop Section */}
            {/* <Products/> */}

            <section className="container mx-auto pt-[120px] pb-[90px]">
                {/* TODO: Top bar should be design */}
                <div>

                </div>

                {/* products */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                    {
                        products.map(product => (
                            <Link href={`/shop/${product._id}`} key={product._id}>
                                <div 
                                    className="cursor-pointer" 
                                    id={product._id}
                            >
                                <div className="relative">
                                    <Image
                                        src={product.image}
                                        alt="product image"
                                        width={270}
                                        height={320}
                                        className="w-full hover:scale-105 duration-300"
                                    />
                                    <div className="absolute top-4 right-5 lg:top-4 lg:right-4 bg-white w-[42px] h-[42px] flex items-center justify-center rounded-full cursor-pointer">
                                        <PiHeartThin className="text-2xl "/>
                                    </div>
                                </div>
                                    <div className="mt-6 text-center">
                                        <h1 className="text-lg font-medium mb-2">{product.title}</h1>
                                        <p className="text-lg font-bold text-[#721b65]"><span>$</span><span>{product.price}</span></p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default ShopPage;