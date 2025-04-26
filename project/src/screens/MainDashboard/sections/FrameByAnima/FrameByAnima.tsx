import React from "react";

export const FrameByAnima = (): JSX.Element => {
  return (
    <div className="flex w-full items-center justify-between">
      <h3 className="font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
        Accomodation
      </h3>
      <a
        href="#"
        className="font-['Mont-Bold',Helvetica] font-bold text-[#d1f462] text-[10px] leading-4 underline"
      >
        See all
      </a>
    </div>
  );
};
