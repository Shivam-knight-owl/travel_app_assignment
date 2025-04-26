import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ActivitiesDetailsByAnima = (): JSX.Element => {
  // Data for the days of the week
  const days = [
    { day: "MON", date: "27", month: "JAN", isActive: true },
    { day: "TUE", date: "28", month: "", isActive: false },
    { day: "WED", date: "29", month: "", isActive: false },
    { day: "THU", date: "30", month: "", isActive: false },
    { day: "FRI", date: "31", month: "", isActive: false },
    { day: "SAT", date: "1", month: "FEB", isActive: false },
    { day: "SUN", date: "2", month: "", isActive: false },
  ];

  return (
    <Card className="w-full max-w-[353px] bg-gray-900 rounded-xl overflow-hidden">
      <CardContent className="p-3">
        <div className="flex flex-col w-full items-start justify-center gap-[18px]">
          <div className="flex items-center gap-2">
            <Badge className="bg-primarylight-green text-gray-900 font-semibold text-xs rounded-lg h-7 px-3">
              Day Plan
            </Badge>

            <div className="inline-flex h-[29px] items-center justify-center p-1 bg-[#282828] rounded-lg border-[0.5px] border-solid border-[#d3f462]">
              <span className="font-semibold text-primarylight-green text-xs whitespace-nowrap px-1.5">
                14 Activities
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full overflow-x-auto">
            {days.map((dayItem, index) => (
              <div
                key={index}
                className={`flex ${
                  dayItem.month ? "w-[73px]" : "w-[46px]"
                } h-11 items-center justify-center gap-2 px-2 py-1 bg-[#282828] rounded-lg overflow-hidden ${
                  dayItem.isActive ? "border border-solid border-[#d3f462]" : ""
                }`}
              >
                {dayItem.month && (
                  <div
                    className={`flex w-7 h-11 items-center justify-center p-1 mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] ${
                      dayItem.isActive ? "bg-primarylight-green" : "bg-gray-600"
                    } rounded-[8px_0px_0px_8px] overflow-hidden`}
                  >
                    <div className="rotate-[-90deg] font-semibold text-backgrounddark text-xs whitespace-nowrap">
                      {dayItem.month}
                    </div>
                  </div>
                )}

                <div
                  className={`inline-flex flex-col items-${
                    dayItem.month ? "start" : "center"
                  } justify-center gap-2 ${dayItem.month ? "mr-[-4.00px]" : "mx-[-1.50px]"}`}
                >
                  <div
                    className={`w-[33px] font-medium text-xs ${
                      dayItem.isActive ? "text-textwhite" : "text-gray-600"
                    } ${dayItem.month ? "" : "text-center"} mt-[-1.00px]`}
                  >
                    {dayItem.day}
                  </div>

                  <div
                    className={`w-[33px] font-semibold text-sm ${
                      dayItem.isActive ? "text-textwhite" : "text-gray-600"
                    } ${dayItem.month ? "" : "text-center"}`}
                  >
                    {dayItem.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
