import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import CountUp from "react-countup";


export const DataSection = () => {
  const data = [
    {
      id: 1,
      icon: <IoMdHome size={30} className="text-white" />,
      count: 2000,
      label: "Families Served",
    },
    {
      id: 2,
      icon: <FaUserDoctor size={25} className="text-white" />,
      count: 25,
      label: "Healthcare Professionals",
    },
    {
      id: 3,
      icon: <FaRegFaceSmileBeam size={25} className="text-white" />,
      count: 4000,
      label: "Happy Patients",
    },
    {
      id: 4,
      icon: <SlCalender size={25} className="text-white" />,
      count: 32,
      label: "Years of Experience",
    },
  ];

  const DataCard = ({
    icon,
    count,
    label,
  }: {
    icon: React.ReactNode;
    count: number;
    label: string;
  }) => (
    <div className="flex items-center gap-5">
      <div className="border-2 border-white w-20 h-20 rounded-full flex justify-center items-center">{icon}</div>
      <div>
        <CountUp end={count} duration={2.5} className="text-4xl font-bold" />
        <p className="text-lg font-semibold">{label}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#1a76d1]  mt-36">
      <div className="text-white flex justify-around items-center max-w-7xl mx-auto py-24 flex-wrap gap-10">
        {data.map((item) => (
          <DataCard
            key={item.id}
            icon={item.icon}
            count={item.count}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};
