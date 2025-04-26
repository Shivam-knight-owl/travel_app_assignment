import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ActsByAnima = (): JSX.Element => {
  // Activity data for mapping
  const activities = [
    {
      id: 1,
      title: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
      timing: "8:15 am Morning",
      duration: "3 hours",
      pickup: "From Hotel",
      image: "/image-4.png",
    },
    {
      id: 2,
      title: "Tokyo Sky Tree",
      timing: "1:00 pm Afteroon",
      duration: "3 hours",
      pickup: "From Nakamise Street",
      image: "/image-5.png",
    },
    {
      id: 3,
      title: "Kimono Wearing",
      timing: "Anytime before 8:00pm",
      duration: "1-2 hours",
      pickup: "From Hotel",
      image: "/image-9.png",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[353px] border border-solid border-[#d3f462] rounded-lg overflow-hidden p-1">
      <div className="flex flex-col w-full gap-4">
        {activities.map((activity) => (
          <Card
            key={activity.id}
            className="flex h-[127px] w-full p-0 overflow-hidden border-none"
          >
            <CardContent className="flex p-0 h-full w-full">
              <div className="flex-shrink-0 w-[127px] h-[127px] bg-white rounded-[8px_0px_0px_8px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={activity.title}
                  src={activity.image}
                />
              </div>

              <div className="flex-grow h-full bg-[#4d4d4d] p-[11px_10px] flex flex-col">
                <h3 className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-textwhite text-sm leading-[15px] mb-[39px]">
                  {activity.title}
                </h3>

                <div className="flex flex-col gap-[7px]">
                  <div className="flex items-center gap-1">
                    <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-textwhite text-xs leading-4 whitespace-nowrap">
                      Timing:
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-textwhite text-xs leading-4 whitespace-nowrap">
                      {activity.timing}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-textwhite text-xs leading-4 whitespace-nowrap">
                      Duration:
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-textwhite text-xs leading-4 whitespace-nowrap">
                      {activity.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-textwhite text-xs leading-4 whitespace-nowrap">
                      Pick up:
                    </span>
                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-textwhite text-xs leading-4 whitespace-nowrap">
                      {activity.pickup}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
