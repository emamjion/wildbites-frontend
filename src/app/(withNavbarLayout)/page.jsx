import BestDeal from "@/components/BestDeal";
import BestPetFood from "@/components/BestPetFood";
import DiscountSection from "@/components/DiscountSection";
import HeroSection from "@/components/HeroSection";
import NewCollection from "@/components/NewCollection";
import SpecialServiceSection from "@/components/SpecialServiceSection";

const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <HeroSection/>

            {/* Special Service section */}
            <SpecialServiceSection/>

            {/* Best pet food */}
            <BestPetFood/>

            {/* Discount section */}
            <DiscountSection/>

            {/* New Collection section */}
            <NewCollection/>

            {/* Best Deal section */}
            <BestDeal/>
        </div>
    );
};

export default HomePage;