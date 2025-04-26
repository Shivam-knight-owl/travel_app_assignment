import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FlightDetailsByAnima = (): JSX.Element => {
  const flightData = {
    date: "26.01.2025",
    time: "10:50 am",
    origin: {
      code: "DEL",
      city: "Delhi, India",
    },
    destination: {
      code: "NRT",
      city: "Narita, Tokyo",
    },
  };

  return (
    <Card className="w-full max-w-[353px] h-[124px] bg-primaryblue rounded-2xl overflow-hidden">
      <CardContent className="p-2 relative h-full">
        <div className="w-full h-28 bg-secondaryblue rounded-xl relative">
          <img
            className="absolute w-[238px] h-[124px] top-0 right-0 object-cover"
            alt="Plane"
            src="/plane.png"
          />

          <div className="absolute top-2.5 right-4 [font-family:'Mont-Bold',Helvetica] font-bold text-[#d1f462] text-[10px] tracking-[0] leading-4 underline cursor-pointer">
            See all
          </div>

          <div className="flex flex-col p-2.5">
            <div className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-6">
              Flight Details
            </div>

            <div className="font-body-2 font-[number:var(--body-2-font-weight)] text-white text-[length:var(--body-2-font-size)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)]">
              {flightData.date}, {flightData.time}
            </div>
          </div>

          <div className="absolute bottom-4 left-3 flex items-center">
            <div className="flex flex-col">
              <div className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-4">
                {flightData.origin.code}
              </div>
              <div className="font-body-3 font-[number:var(--body-3-font-weight)] text-white text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)] [font-style:var(--body-3-font-style)]">
                {flightData.origin.city}
              </div>
            </div>

            <ArrowRightIcon className="mx-2 w-[18px] h-3.5 text-white" />

            <div className="flex flex-col">
              <div className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-4">
                {flightData.destination.code}
              </div>
              <div className="font-body-3 font-[number:var(--body-3-font-weight)] text-white text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)] [font-style:var(--body-3-font-style)]">
                {flightData.destination.city}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
