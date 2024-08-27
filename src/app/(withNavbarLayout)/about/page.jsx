"use client";
import AboutBanner from "@/components/About/AboutBanner";
import SpecialServiceSection from "@/components/SpecialServiceSection";
import { usePathname } from "next/navigation";

const AboutPage = () => {
    const pathname = usePathname();
    return (
        <div>
            {/* About section banner */}
            <AboutBanner pathname={pathname} />

            {/* Special Features section */}
            <SpecialServiceSection/>
        </div>
    );
};

export default AboutPage;