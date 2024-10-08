"use client";
import AboutBanner from "@/components/About/AboutBanner";
import AboutBestFood from "@/components/About/AboutBestFood";
import TeamMember from "@/components/About/TeamMember";
import SpecialServiceSection from "@/components/SpecialServiceSection";
import Testimonials from "@/components/Testimonials";
import { usePathname } from "next/navigation";

const AboutPage = () => {
    const pathname = usePathname();
    return (
        <div>
            {/* About section banner */}
            <AboutBanner pathname={pathname} />

            {/* about best pet food */}
            <AboutBestFood/>

            {/* Team member section */}
            <TeamMember/>

            {/* Testimonials */}
            <Testimonials/>

            {/* Special Features section */}
            <SpecialServiceSection/>


        </div>
    );
};

export default AboutPage;