import React from "react";

export const DivByAnima = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-white font-h2 font-[number:var(--h2-font-weight)] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
        Hello Chhavi!
      </h2>
      <p className="text-white font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
        Ready for the trip?
      </p>
    </div>
  );
};
