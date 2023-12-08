import { FunctionComponent } from "react";

const AchievementsCardForm: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-[6.19rem] text-center text-[4.06rem] text-lighter-text-night font-text-18-regular">
      <div className="w-[12.5rem] flex flex-col items-center justify-start gap-[0.63rem]">
        <div className="relative font-black [background:linear-gradient(90.16deg,_#03cd8b,_#04b6de)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          10
        </div>
        <div className="self-stretch relative text-[1rem] leading-[1.38rem]">
          years of industry expereince
        </div>
      </div>
      <img
        className="relative w-[0.06rem] h-[13.88rem] opacity-[0.5]"
        alt=""
        src="/line-effect.svg"
      />
      <div className="w-[12.5rem] flex flex-col items-center justify-start gap-[0.63rem]">
        <div className="relative font-black [background:linear-gradient(87.42deg,_#ff8b57,_#ff62f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          $50
        </div>
        <div className="self-stretch relative text-[1rem] leading-[1.38rem]">
          <p className="m-0">worth of funded engineerd solutions</p>
        </div>
      </div>
      <img
        className="relative w-[0.06rem] h-[13.88rem] opacity-[0.5]"
        alt=""
        src="/line-effect.svg"
      />
      <div className="w-[12.5rem] flex flex-col items-center justify-start gap-[0.63rem]">
        <div className="flex flex-row items-start justify-center">
          <div className="relative font-black [background:linear-gradient(91.61deg,_#8244ff,_#3e97ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            1
          </div>
          <div className="relative text-[2.19rem] font-black [background:linear-gradient(91.61deg,_#8244ff,_#3e97ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            st
          </div>
        </div>
        <div className="self-stretch relative text-[1rem] leading-[1.38rem]">
          <p className="m-0">full-time employee of Synack</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementsCardForm;
