import React from "react";
import Image from "next/image";
import { FaAmbulance } from "react-icons/fa";
import { IoBodySharp } from "react-icons/io5";
import { LuPipette } from "react-icons/lu";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="flex flex-col justify-center items-center mx-4">
        <div className="w-32 h-32 rounded-full flex justify-center items-center border border-gray-300 hover:bg-[#1a76d1] bg-white">
            {icon}
        </div>
        <div className="text-center mt-10">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-lg ">{description}</p>
        </div>
    </div>
);

export const FamilyHealthCare: React.FC = () => {
    const services = [
        {
            icon: <IoBodySharp  size={60} className="text-[#1a76d1] hover:text-white" />,
            title: "Annual Physical Examination ",
            description: "Routine annual exams focus on prevention and early detection.",
        },
        {
            icon: <FaAmbulance size={60} className="text-[#1a76d1] hover:text-white" />,
            title: "Chronic Condition Management ",
            description: "We provide long-term management plans for many chronic conditions ",
        },
        {
            icon: <LuPipette  size={60} className="text-[#1a76d1] hover:text-white" />,
            title: "Laboratory Services ",
            description: "Our lab provides reliable and efficient testing for diagnostics and screenings. ",
        },
    ];

    return (
        <section className="bg-white mt-32  ">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl text-center font-semibold my-6">
                    Comprehensive Family HealthCare
                </h1>
                <Image
                    src="/images/section-img.png"
                    alt="section image"
                    width={50}
                    height={50}
                    className="my-4"
                />
                <p className="text-[#abaaab] text-center max-w-2xl mx-auto my-6 text-lg lg:text-xl">
                    Our team is dedicated to providing exceptional, compassionate care for
                    you and your loved ones. Whether you need emergency attention,
                    medication support, or ongoing treatment, Family Clinic ensures your
                    well-being is always our top priority.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mt-20 gap-24">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};
