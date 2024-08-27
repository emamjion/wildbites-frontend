import Image from "next/image";
import deal from '../../public/assets/images/deal.webp';
import Button from "./Button";

const BestDeal = () => {
    return (
        <section className="bg-[#721b65]">
            <div className="container mx-auto py-12 lg:py-0">
                {/* content container */}
                <div className="flex flex-col lg:flex-row items-center gap-[30px] relative">
                    <div className="w-full lg:w-1/2">
                        <Image
                            src={deal}
                            alt="Best deal image"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-accent tracking-wider font-medium text-lg uppercase mb-3">Save 50% Off</h3>
                        <h1 className="text-3xl md:text-5xl font-bold mb-2.5 text-white">Dest Deal Offer</h1>
                        <p className="text-white leading-relaxed mb-11">
                            Unlock our best deal today! Get premium pet food at unbeatable prices, ensuring your furry friends receive top-quality nutrition. Limited time only!
                        </p>
                        <div>
                            <Button>Show Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestDeal;