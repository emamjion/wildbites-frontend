import Image from "next/image";
import f1 from '../../public/assets/icons/f1.webp';
import f2 from '../../public/assets/icons/f2.webp';
import f3 from '../../public/assets/icons/f3.webp';
import f4 from '../../public/assets/icons/f4.webp';
const SpecialServiceSection = () => {
    return (
        <section className="border-b">
            <div className="container mx-auto">
                {/* Service container */}
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-between pb-[60px] pt-[57px]">
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <Image
                            src={f1}
                            width={46}
                            height={34}
                             alt="Free Shipping"
                        />
                        <div >
                            <h1 className="text-2xl mb-1 font-medium">Free Shipping</h1>
                            <p className="text-[#848484]">
                                Capped at $39 per order
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <Image
                            src={f2}
                            width={43}
                            height={34}
                             alt="Card Payments"
                        />
                        <div>
                            <h1 className="text-2xl mb-1 font-medium">Card Payments</h1>
                            <p className="text-[#848484]">
                                12 Months Installments
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <Image
                            src={f3}
                            width={39}
                            height={39}
                             alt="Easy Refunds"
                        />
                        <div>
                            <h1 className="text-2xl mb-1 font-medium">Easy Refunds</h1>
                            <p className="text-[#848484]">
                                Shop With Confidence
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <Image
                            src={f4}
                            width={36}
                            height={39}
                            alt="24/7 Support"
                            
                        />
                        <div>
                            <h1 className="text-2xl mb-1 font-medium">24/7 Support</h1>
                            <p className="text-[#848484]">
                                Contact 24 hours everyday
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialServiceSection;