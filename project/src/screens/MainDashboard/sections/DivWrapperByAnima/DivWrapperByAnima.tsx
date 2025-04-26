import { CheckCircleIcon, ClockIcon, StarIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

// Hotel booking data
const hotelBookings = [
  {
    id: 1,
    name: "Shinagawa Prince Hotel",
    image: "/image-3.png",
    rating: "4.0",
    ratingText: "Very Good",
    checkIn: "26.01.2025, 11:15 pm",
    checkOut: "28.01.2025, 11:15 am",
    nights: "2 Nights",
    status: "Confirmed",
    statusColor: "secondarygreen",
  },
  {
    id: 2,
    name: "Mercure Tokyo Hotel",
    image: "/image-2.png",
    rating: "4.1",
    ratingText: "Very Good",
    checkIn: "28.01.2025, 6:00 pm",
    checkOut: "30.01.2025, 11:15 am",
    nights: "2 Nights",
    status: "Pending",
    statusColor: "secondaryred",
  },
  {
    id: 3,
    name: "Mercure Tokyo Hotel",
    image: "/image-3.png",
    rating: "4.1",
    ratingText: "Very Good",
    checkIn: "29.01.2025, 6:00 pm",
    checkOut: "30.01.2025, 11:15 am",
    nights: "2 Nights",
    status: "Pending",
    statusColor: "secondaryred",
  },
];

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-4 py-2">
        {hotelBookings.map((hotel) => (
          <Card
            key={hotel.id}
            className="w-[198px] h-[239px] bg-gray-800 rounded-2xl overflow-hidden flex-shrink-0"
          >
            <div className="relative w-full h-[124px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${hotel.image})` }}
              >
                <Badge className="absolute bottom-2 left-2 flex items-center gap-0.5 bg-primaryblue text-textwhite rounded-sm py-0 px-0.5">
                  <StarIcon className="w-2.5 h-2.5" />
                  <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-[8px] leading-4">
                    {hotel.rating}
                  </span>
                  <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-[8px] leading-4">
                    {hotel.ratingText}
                  </span>
                </Badge>
              </div>
            </div>

            <CardContent className="p-0">
              <div className="px-2 pt-2">
                <h3 className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-textwhite text-sm leading-[15px]">
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-1 mt-3">
                  <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-textwhite text-xs leading-4">
                    Check in:
                  </span>
                  <span className="[font-family:'Montserrat',Helvetica] font-normal text-textwhite text-xs leading-4">
                    {hotel.checkIn}
                  </span>
                </div>

                <div className="flex items-center gap-1 mt-1">
                  <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-textwhite text-xs leading-4">
                    Check out:
                  </span>
                  <span className="[font-family:'Montserrat',Helvetica] font-normal text-textwhite text-xs leading-4">
                    {hotel.checkOut}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-textwhite text-xs leading-4">
                    {hotel.nights}
                  </span>

                  <div className="flex items-center gap-0.5">
                    {hotel.status === "Confirmed" ? (
                      <>
                        <CheckCircleIcon className="w-5 h-5 text-secondarygreen" />
                        <span
                          className={`[font-family:'Mont-SemiBold',Helvetica] font-semibold text-${hotel.statusColor} text-xs leading-4`}
                        >
                          {hotel.status}
                        </span>
                      </>
                    ) : (
                      <>
                        <ClockIcon className="w-6 h-6 text-secondaryred" />
                        <span
                          className={`[font-family:'Mont-SemiBold',Helvetica] font-semibold text-${hotel.statusColor} text-xs leading-4`}
                        >
                          {hotel.status}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
