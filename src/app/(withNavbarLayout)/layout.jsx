import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const NavbarLayout = async({children}) => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <Navbar session={session} />
            {children}
            <Footer/>
        </div>
    );
};

export default NavbarLayout;