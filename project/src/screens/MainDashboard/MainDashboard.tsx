import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { ActivitiesDetailsByAnima } from "./sections/ActivitiesDetailsByAnima/ActivitiesDetailsByAnima";
import { ActsByAnima } from "./sections/ActsByAnima/ActsByAnima";
import { DivByAnima } from "./sections/DivByAnima/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima/DivWrapperByAnima";
import { FlightDetailsByAnima } from "./sections/FlightDetailsByAnima/FlightDetailsByAnima";
import { FrameByAnima } from "./sections/FrameByAnima/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima/FrameWrapperByAnima";
import { TokyoByAnima } from "./sections/TokyoByAnima";

export const MainDashboard = (): JSX.Element => {
  const activityData = {
    day: "Day 1",
    date: "27.01.2025",
    count: "3 Activities",
  };

  return (
    <div className="bg-[#0b0809] flex flex-row justify-center w-full">
      <div className="bg-backgrounddark overflow-hidden w-[393px] relative">
        {/* Background blur effects */}
        <div className="relative w-full">
          <div className="absolute w-[146px] h-[141px] top-[189px] right-[-26px] bg-[#c47947] rounded-[73px/70.5px] blur-[200px]" />
          <div className="absolute w-[174px] h-[168px] top-0 left-[81px] bg-[#799df4] rounded-[87px/84px] blur-[200px]" />
          <div className="absolute w-[324px] h-[313px] top-[317px] right-[-62px] bg-[#bfb5ff33] rounded-[162px/156.5px] blur-[200px]" />
          <div className="absolute w-[228px] h-[220px] top-[641px] left-0 bg-[#bfb5ff66] rounded-[114px/110px] blur-[200px]" />
          <div className="absolute w-[228px] h-[220px] top-0 left-0 bg-[#d9d9d966] rounded-[114px/110px] blur-[200px]" />
          <div className="absolute w-[324px] h-[313px] top-[1583px] left-[54px] bg-[#bfb5ff33] rounded-[162px/156.5px] rotate-[-152.62deg] blur-[200px]" />
          <div className="absolute w-[394px] h-[380px] top-[1146px] left-[324px] bg-[#d9d9d966] rounded-[197px/190px] blur-[300px]" />
          <div className="absolute w-[228px] h-[220px] top-[1875px] left-[164px] bg-[#bfb5ff66] rounded-[114px/110px] rotate-[-152.62deg] blur-[200px]" />
        </div>

        {/* Main content container */}
        <div className="relative flex flex-col w-full">
          {/* Status bar */}
          <div className="flex justify-between items-center px-2 pt-[90px] pb-4 w-full">
            <div className="relative w-[37px] h-[22px]">
              <div className="absolute top-0 left-0 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-white text-[17px] text-center tracking-[-0.80px] leading-[22px] whitespace-nowrap">
                9:41
              </div>
            </div>

            <div className="relative w-[75.4px] h-[13px] flex items-center justify-end gap-1">
              <img className="w-[18px] h-3" alt="Signal" src="/signal.svg" />
              <img className="w-[17px] h-3" alt="Wi fi" src="/wi-fi.svg" />
              <img
                className="w-[27px] h-[13px]"
                alt="Battery"
                src="/battery.png"
              />
            </div>
          </div>

          {/* User profile section */}
          <div className="relative w-full px-4">
            <DivByAnima />
            <Avatar className="absolute top-[49px] right-[17px] w-[38px] h-[38px] bg-primaryred rounded-[19px] flex items-center justify-center">
              <div className="relative w-fit [font-family:'Mont-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-4 whitespace-nowrap">
                C
              </div>
            </Avatar>
          </div>

          {/* Your Upcoming Trip heading */}
          <div className="px-[91px] mt-4 font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
            Your Upcoming Trip
          </div>

          {/* Trip details sections */}
          <div className="relative w-full mt-4">
            <TokyoByAnima />
            <FlightDetailsByAnima />
            <FrameByAnima />
            <FrameWrapperByAnima />
            <DivWrapperByAnima />
          </div>

          {/* Activities section */}
          <div className="relative w-full mt-8">
            <ActivitiesDetailsByAnima />

            {/* Day indicator */}
            <div className="inline-flex items-center gap-[18px] px-4 mt-4 ml-[28px]">
              <Badge className="inline-flex h-5 items-center justify-center gap-2.5 p-1 bg-primarylight-green rounded-lg overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-backgrounddark text-xs tracking-[0] leading-3 whitespace-nowrap">
                  {activityData.day}
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-backgrounddark text-xs tracking-[0] leading-3 whitespace-nowrap">
                  {activityData.date}
                </div>
              </Badge>

              <div className="inline-flex items-center gap-1">
                <img
                  className="w-3.5 h-3.5"
                  alt="La hiking"
                  src="/la-hiking.svg"
                />
                <div className="w-fit font-semibold text-primarylight-green leading-3 whitespace-nowrap [font-family:'Montserrat',Helvetica] text-xs tracking-[0]">
                  {activityData.count}
                </div>
              </div>
            </div>

            <ActsByAnima />
          </div>
        </div>
      </div>
    </div>
  );
};
