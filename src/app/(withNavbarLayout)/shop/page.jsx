"use client";

import Products from "@/components/Shop/Products";
import ShopBanner from "@/components/Shop/ShopBanner";
import { usePathname } from "next/navigation";

const ShopPage = () => {
    const pathname = usePathname();
    return (
        <div>
            {/* Shop banner section */}
            <ShopBanner pathname={pathname} />

            {/* Shop Section */}
            <Products/>
        </div>
    );
};

export default ShopPage;