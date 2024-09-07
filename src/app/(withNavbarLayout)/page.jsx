import BestDeal from "@/components/BestDeal";
import BestPetFood from "@/components/BestPetFood";
import DiscountSection from "@/components/DiscountSection";
import HeroSection from "@/components/HeroSection";
import LatestBlogSection from "@/components/LatestBlogSection";
import NewCollection from "@/components/NewCollection";
import SpecialServiceSection from "@/components/SpecialServiceSection";
import TrendingProducts from "@/components/TrendingProducts";

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

            {/* Best Deal of the day section */}
            <TrendingProducts/>

            {/* Latest blog section */}
            <LatestBlogSection/>
        </div>
    );
};

export default HomePage;