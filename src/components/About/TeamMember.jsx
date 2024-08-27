"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TeamMember = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./team.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    }, [])
    
    return (
        <section className='container mx-auto pt-[120px] pb-[90px]'>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#721b65] mb-2 text-base font-semibold tracking-widest uppercase">Our Team</h3>
                    <h1 className="text-5xl font-bold text-[#2c2c2c]">Team Member</h1>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {
                        members.map((member) => {
                            return (
                                <div className="w-full" key={member.id}>
                                    <div>
                                        <Image
                                            src={member.image}
                                            alt="Team member image"
                                            width={270}
                                            height={300}
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <h1 className="text-2xl font-medium mb-1">{member.name}</h1>
                                        <p className="font-semibold">{member.position}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamMember;