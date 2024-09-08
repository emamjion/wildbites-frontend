import Sidebar from "@/components/Dashboard/Sidebar";

const DashboardLayout = ({children}) => {
    return (
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div className="p-7 flex-1 h-screen bg-gray-100">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;