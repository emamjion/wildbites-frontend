
const Button = ({children}) => {
    return (
        <button className="px-6 py-2.5 transition-all duration-300 bg-primary rounded-md text-[#721b65] font-semibold hover:bg-accent-hover">
            {children}
        </button>
    );
};

export default Button;