import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-card-base-01-night flex flex-col items-center justify-end py-[2.5rem] px-[0.63rem] text-left text-[1.75rem] text-white-night font-text-18-regular border-t-[1px] border-solid border-card-border-night">
      <div className="flex flex-row items-center justify-start relative gap-[12.5rem]">
        <img
          className="absolute my-0 mx-[!important] top-[-2.53rem] left-[-0.03rem] w-[50.19rem] h-[0.06rem] z-[0]"
          alt=""
          src="/top-line-effect.svg"
        />
        <div className="relative tracking-[3px] leading-[2.5rem] uppercase [background:linear-gradient(90.16deg,_#03cd8b,_#04b6de)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
          <b>thought</b>
          <span>codex</span>
        </div>
        <div className="flex flex-row items-start justify-start gap-[3.63rem] z-[2] text-[1.13rem]">
          <div className="relative leading-[1.81rem]">Work</div>
          <div className="relative leading-[1.81rem]">Background</div>
          <div className="relative leading-[1.81rem]">Contact</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.31rem] z-[3]">
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
  );
};

export default Footer;
