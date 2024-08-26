
const Button = ({children}) => {
    return (
        <button className="px-6 py-2.5 transition-all duration-300 bg-primary rounded-md text-white font-semibold hover:bg-[#1c1b28]">
            {children}
        </button>
    );
};

export default Button;