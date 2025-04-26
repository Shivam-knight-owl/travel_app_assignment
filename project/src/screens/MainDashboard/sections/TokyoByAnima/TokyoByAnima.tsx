import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TokyoByAnima = (): JSX.Element => {
  // Data for trip details
  const tripDetails = [
    {
      icon: "/time.png",
      value: "8 Days",
      label: "Duration",
    },
    {
      icon: null, // This will be handled with a special case
      value: "4 (2M,2F)",
      label: "Group Size",
    },
    {
      icon: "/mdi-planner-outline.svg",
      value: "14",
      label: "Activities",
    },
  ];

  return (
    <Card className="relative w-full max-w-[353px] h-[330px] rounded-2xl overflow-hidden">
      {/* Main background image */}
      <img
        className="w-full h-full object-cover"
        alt="Tokyo"
        src="/image.png"
      />

      {/* Overlay blurs */}
      <div className="absolute w-full h-[159px] bottom-0 left-0">
        {Array.from({ length: 10 }).map((_, index) => (
          <img
            key={index}
            className="absolute w-full h-full bottom-0 left-0"
            alt="Blur effect"
            src={`/blur-${index + 1}.png`}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden [background:linear-gradient(180deg,rgba(102,102,102,0)_0%,rgba(99,99,99,0.01)_3%,rgba(0,0,0,0.4)_84%)]">
        <CardContent className="p-0 h-full">
          {/* Title and date */}
          <div className="p-4">
            <h2 className="text-[40px] leading-6 text-white [font-family:'MODERNIZ-Regular',Helvetica] font-normal">
              TOKYO
            </h2>
            <p className="mt-2 [font-family:'Montserrat',Helvetica] font-semibold text-white text-xs leading-4">
              27.01.2025 - 02.02.2025
            </p>
          </div>

          {/* Bookmark icon */}
          <img
            className="absolute w-10 h-10 top-3.5 right-4"
            alt="Bookmark"
            src="/frame-35.svg"
          />

          {/* Trip details at bottom */}
          <div className="absolute bottom-[15px] left-[22px] flex items-center gap-7">
            {tripDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-1">
                <div className="flex w-7 h-7 items-center justify-center p-1 bg-[#282828] rounded-[19px] overflow-hidden">
                  {index === 1 ? (
                    <div className="relative w-5 h-[18px] [font-family:'Font_Awesome_6_Pro-Regular',Helvetica] font-normal text-[#d1f462] text-[13px] text-center leading-[14px]"></div>
                  ) : (
                    <img
                      className={index === 0 ? "w-4 h-4" : "w-[18px] h-[18px]"}
                      alt={detail.label}
                      src={detail.icon}
                    />
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <div
                    className={`mt-[-1.00px] font-semibold text-white leading-3 [font-family:'Montserrat',Helvetica] text-xs ${index === 0 ? "w-[45px]" : "w-14"}`}
                  >
                    {detail.value}
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-[10px] leading-[10px]">
                    {detail.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
