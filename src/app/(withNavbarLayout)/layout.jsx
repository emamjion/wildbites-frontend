import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const NavbarLayout = async({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default NavbarLayout;