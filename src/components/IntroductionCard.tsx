import { FunctionComponent } from "react";

const IntroductionCard: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[3.75rem] text-center text-[1.13rem] text-lighter-text-night font-text-18-regular">
      <div className="flex flex-col items-center justify-start">
        <img
          className="relative w-[36.63rem] h-[43.06rem] object-cover"
          alt=""
          src="/liam-v022x-1@2x.png"
        />
        <div className="flex flex-col items-center justify-start gap-[1.25rem] mt-[-3.56rem]">
          <div className="relative tracking-[2px] leading-[1.25rem] uppercase [background:linear-gradient(90.16deg,_#03cd8b,_#04b6de)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Hi My name is
          </div>
          <div className="relative text-[5.94rem] font-extrabold [background:linear-gradient(95deg,_#8244ff,_#60f0c9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Liam Norris
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.31rem]">
            <div className="rounded-51xl w-[3.75rem] h-[3.75rem] flex flex-col items-center justify-center p-[0.63rem] box-border">
              <img
                className="relative w-[1.25rem] h-[1.2rem]"
                alt=""
                src="/linkedin.svg"
              />
            </div>
            <div className="rounded-51xl w-[3.75rem] h-[3.75rem] flex flex-col items-center justify-center p-[0.63rem] box-border">
              <img
                className="relative w-[1.81rem] h-[1.75rem]"
                alt=""
                src="/github.svg"
              />
            </div>
            <div className="rounded-51xl w-[3.75rem] h-[3.75rem] flex flex-col items-center justify-center p-[0.63rem] box-border">
              <img
                className="relative w-[1.63rem] h-[1.32rem]"
                alt=""
                src="/twitter.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-[1.5rem] leading-[2.31rem] inline-block w-[63rem]">
        <span>{`I've spent the last decade building valuable products that play between three dimensions of technology: `}</span>
        <b className="[background:linear-gradient(91.3deg,_#01efa2,_#01c2ed)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          People
        </b>
        <span>{`, `}</span>
        <b className="[background:linear-gradient(88.12deg,_#ff8b57,_#ff62f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Markets
        </b>
        <span>{`, & `}</span>
        <b className="[background:linear-gradient(91.82deg,_#8244ff,_#3e97ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Machines
        </b>
        <span>
          . Connecting the three through online communities, marketplaces, and
          platforms is my deep professional passion.
        </span>
      </div>
      <div className="h-[24.31rem] flex flex-row flex-wrap items-start justify-start gap-[1.88rem] text-left text-[0.88rem] text-deepskyblue">
        <div className="self-stretch rounded-3xs bg-card-base-01-night box-border w-[23.13rem] flex flex-col items-start justify-start p-[3.13rem] relative gap-[1.88rem] border-[1px] border-solid border-card-border-night">
          <div className="relative w-[3rem] h-[3rem] z-[0]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-3/6 w-full top-[25%] right-[0%] bottom-[25%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/people.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.06rem] z-[1]">
            <div className="self-stretch relative tracking-[2px] leading-[1.25rem] uppercase">
              People
            </div>
            <div className="self-stretch relative text-[1.13rem] leading-[1.81rem] text-lighter-text-night">
              People are first. Customers deserve value, teammates deserve
              speed, and investors deserve growth. All three always deserve
              more, better, and sooner.
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[0rem] left-[0rem] w-[20.63rem] h-[12.04rem] z-[2]"
            alt=""
            src="/background-effect-green.svg"
          />
        </div>
        <div className="self-stretch rounded-3xs bg-card-base-01-night box-border w-[23.13rem] flex flex-col items-start justify-start p-[3.13rem] relative gap-[1.88rem] text-pink-night border-[1px] border-solid border-card-border-night">
          <div className="relative w-[3rem] h-[3rem] z-[0]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-[71.67%] w-[91.67%] top-[14.58%] right-[4.17%] bottom-[13.75%] left-[4.17%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.06rem] z-[1]">
            <div className="self-stretch relative tracking-[2px] leading-[1.25rem] uppercase">
              Markets
            </div>
            <div className="self-stretch relative text-[1.13rem] leading-[1.81rem] text-lighter-text-night">
              Markets are more than just price sparklines. They are the cries of
              needs unmet. I've found that opportunity tends to hide in
              inefficient ones.
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[0rem] left-[0rem] w-[20.63rem] h-[12.04rem] z-[2]"
            alt=""
            src="/background-effect-orange.svg"
          />
        </div>
        <div className="self-stretch rounded-3xs bg-card-base-01-night box-border w-[23.13rem] flex flex-col items-start justify-start p-[3.13rem] relative gap-[1.88rem] text-sky-night border-[1px] border-solid border-card-border-night">
          <div className="relative w-[3rem] h-[3rem] z-[0]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/machines.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.06rem] z-[1]">
            <div className="self-stretch relative tracking-[2px] leading-[1.25rem] uppercase">
              Machines
            </div>
            <div className="self-stretch relative text-[1.13rem] leading-[1.81rem] text-lighter-text-night">
              Machines are the engines of efficiency. Processes that can be
              measured can always be improved; machines deliver improvements the
              fastest.
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[0rem] left-[0rem] w-[20.63rem] h-[12.04rem] z-[2]"
            alt=""
            src="/background-effect-purple.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionCard;
