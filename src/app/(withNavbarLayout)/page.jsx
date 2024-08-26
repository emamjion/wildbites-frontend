import BestPetFood from "@/components/BestPetFood";
import HeroSection from "@/components/HeroSection";
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
        </div>
    );
};

export default HomePage;