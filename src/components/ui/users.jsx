"use client";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Rajiv Talwaar",
    designation: "100 rpya mahinay hi tau manga h",
    image: "A.PNG",
  },
  {
    id: 2,
    name: "Arvind Mera Saathi",
    designation: "Karo guddi laal",
    image: "B.PNG",
  },
  {
    id: 3,
    name: "Puneet Kumar",
    designation: "Tu rokay ga mujhay",
    image: "C.PNG",
  },
  {
    id: 4,
    name: "ACP Pradyuman",
    designation: "Parhnay likhnay ki umer h aur yaha aye hway ho",
    image: "E.PNG",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-center mb-2 w-full">
        <AnimatedTooltip items={people} />
        {/* Add margin-left to this div for spacing */}
        <div className="ml-6">
          {" "}
          {/* Change ml-4 to your desired spacing */}
          <h1 className="text-xl font-medium text-[#55dd4a] tracking-tight">
            +69k <span className="text-[#f3ede4]">users</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
