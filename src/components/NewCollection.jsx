import TabComponent from "./TabComponent";

const NewCollection = () => {
    return (
        <section className="container mx-auto pb-[90px]">
            <div className="">
                <div className="flex items-center justify-center flex-col">
                    <h3 className="text-[#721b65] mb-2 text-base font-semibold tracking-widest uppercase">Best Product</h3>
                    <h1 className="text-5xl font-bold text-[#2c2c2c]">New Collection</h1>
                </div>
                <div className="mt-6">
                    <TabComponent/>
                </div>
            </div>
        </section>
    );
};

export default NewCollection;