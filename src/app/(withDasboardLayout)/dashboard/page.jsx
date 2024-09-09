import LogoutButton from "@/components/Dashboard/LogoutButton";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
    const session = await getServerSession(authOptions);
    
    return (
        <section>
            <div className="">
                {
                   session?.user && (
                    <>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-3">
                                <Image
                                        src={session.user?.image}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="rounded-full border border-[#721b65]"
                                    />
                                <div>
                                    <h1>Welcome <span className="text-lg font-bold text-[#721b65]">{session.user?.name}</span>!!</h1>
                                    <span>{session.user?.email}</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                   <LogoutButton session={session} />
                                </div>
                                
                            </div>
                        </div>
                    </>
                   )
                }
            </div>
            <div className="border-b border-[#e8e8e8] mt-2 shadow"></div>
        </section>
    );
};

export default DashboardPage;