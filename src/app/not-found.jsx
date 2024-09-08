import Link from "next/link";

const NotFoundPage = () => {
    return (
        <section className="container mx-auto">
            <div className="flex items-center justify-center h-screen w-full">
                <div className="text-center w-full md:max-w-[570px]">
                    <h1 className="text-[170px] text-[#721b65] leading-none tracking-tight font-bold">404</h1>
                    <h2 className="text-[38px] mb-5 mt-3 font-bold">Page Couldnot Found!</h2>
                    <p className="text-[#181818] mb-[30px]">
                        Nothing was found at this location. Try something else or you can 
                        go back to the homepage following the button below!
                    </p>
                    <div>
                        <Link href={'/'}>
                            <button className="px-11 py-4 font-semibold uppercase border-2 border-[#721b65] hover:bg-accent hover:border-2 hover:border-accent duration-300 transition-all">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;