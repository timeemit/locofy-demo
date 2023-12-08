import { FunctionComponent } from "react";
import AvatarMarkImage from "./AvatarMarkImage";
import AvatarBenPlaceholderImage from "./AvatarBenPlaceholderImage";
import AvatarAlexanderImage from "./AvatarAlexanderImage";
import AvatarAislingImage from "./AvatarAislingImage";

const HighlightedReferencesForm: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-start relative gap-[5.63rem] text-center text-[1.13rem] text-white-night font-text-18-regular">
      <img
        className="absolute my-0 mx-[!important] top-[48.69rem] left-[68rem] w-[17.56rem] h-[13.51rem] opacity-[0.2] z-[0]"
        alt=""
        src="/quote-image-bottom-right-left.svg"
      />
      <img
        className="absolute my-0 mx-[!important] top-[1.13rem] left-[-12.56rem] w-[18.75rem] h-[13.51rem] opacity-[0.2] z-[1]"
        alt=""
        src="/quote-image-top-left.svg"
      />
      <div className="relative tracking-[2px] leading-[1.25rem] uppercase [background:linear-gradient(90.16deg,_#03cd8b,_#04b6de)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[2]">
        Higlighted references
      </div>
      <div className="w-[73rem] flex flex-row flex-wrap items-start justify-start gap-[1.88rem] z-[3] text-left">
        <div className="rounded-3xs bg-card-base-01-night flex flex-col items-start justify-start pt-[1.88rem] px-[3.13rem] pb-[3.13rem] relative gap-[1.69rem] border-[1px] border-solid border-card-border-night">
          <AvatarMarkImage
            imageDimensions="/avatarmark@2x.png"
            avatarMarkIconWidth="10.5rem"
            avatarMarkIconHeight="10.5rem"
            avatarMarkIconPosition="absolute"
            avatarMarkIconMargin="0 !important"
            avatarMarkIconTop="-4.12rem"
            avatarMarkIconLeft="1rem"
            avatarMarkIconZIndex="0"
          />
          <div className="self-stretch flex flex-row items-start justify-end z-[1]">
            <img
              className="relative w-[7.88rem] h-[2rem] object-cover"
              alt=""
              src="/synack-logo@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-end justify-start z-[2]">
            <div className="self-stretch relative leading-[1.81rem]">
              He’s easily one of the top people I would want to work with again,
              and I cannot endorse Liam highly enough for future positions.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.38rem] z-[3] text-[1rem] text-lighter-text-night">
            <b className="relative leading-[1.38rem] [background:linear-gradient(90.16deg,_#03cd8b,_#04b6de)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Dr. Mark Kuhr
            </b>
            <div className="relative text-[0.88rem] leading-[1.19rem] inline-block w-[29.31rem]">
              CTO of Synack, Inc.
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] bottom-[0rem] left-[0rem] w-[20.63rem] h-[12.57rem] z-[4]"
            alt=""
            src="/background-effect.svg"
          />
        </div>
        <div className="rounded-3xs bg-card-base-01-night flex flex-col items-start justify-start pt-[1.88rem] px-[3.13rem] pb-[3.13rem] relative gap-[1.69rem] border-[1px] border-solid border-card-border-night">
          <AvatarBenPlaceholderImage
            avatarBenPlaceholderImage="/avatarben-placeholder@2x.png"
            avatarBenPlaceholderIconWidth="10.5rem"
            avatarBenPlaceholderIconHeight="10.5rem"
            avatarBenPlaceholderIconPosition="absolute"
            avatarBenPlaceholderIconMargin="0 !important"
            avatarBenPlaceholderIconTop="-4.12rem"
            avatarBenPlaceholderIconLeft="1rem"
            avatarBenPlaceholderIconZIndex="0"
          />
          <div className="self-stretch flex flex-col items-end justify-start gap-[1.88rem] z-[1]">
            <img
              className="relative w-[6rem] h-[1.25rem] object-cover"
              alt=""
              src="/logo-facebook@2x.png"
            />
            <div className="self-stretch relative leading-[1.81rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.38rem] z-[2] text-[1rem] text-lighter-text-night">
            <b className="relative leading-[1.38rem] [background:linear-gradient(90.16deg,_#03cd8b,_#04b6de)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Ben Jerry
            </b>
            <div className="relative text-[0.88rem] leading-[1.19rem] inline-block w-[29.31rem]">
              CTO of Meta
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] bottom-[0rem] left-[0rem] w-[20.63rem] h-[12.57rem] z-[3]"
            alt=""
            src="/background-effect.svg"
          />
        </div>
        <div className="rounded-3xs bg-card-base-01-night flex flex-col items-start justify-start pt-[1.88rem] px-[3.13rem] pb-[3.13rem] relative gap-[1.69rem] border-[1px] border-solid border-card-border-night">
          <AvatarAlexanderImage
            imageDimensions="/avataralexander@2x.png"
            avatarAlexanderIconWidth="10.5rem"
            avatarAlexanderIconHeight="10.5rem"
            avatarAlexanderIconPosition="absolute"
            avatarAlexanderIconMargin="0 !important"
            avatarAlexanderIconTop="-4.12rem"
            avatarAlexanderIconLeft="1rem"
            avatarAlexanderIconZIndex="0"
          />
          <div className="self-stretch flex flex-col items-end justify-start gap-[1.88rem] z-[1]">
            <div className="relative w-[7.81rem] h-[1.63rem]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/logo-ringcentral@2x.png"
              />
            </div>
            <div className="self-stretch relative leading-[1.81rem]">
              Liam's contribution to the company's present success is hard to
              overestimate: having been the number one hire, he was the one who
              put his passion into what Synack's product and technology is
              today.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.38rem] z-[2] text-[1rem] text-lighter-text-night">
            <b className="relative leading-[1.38rem] [background:linear-gradient(90.16deg,_#03cd8b,_#04b6de)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Alexander Krassiev
            </b>
            <div className="relative text-[0.88rem] leading-[1.19rem] inline-block w-[29.31rem]">
              Director of Engineering at RingCentral
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] bottom-[0rem] left-[0rem] w-[20.63rem] h-[12.57rem] z-[3]"
            alt=""
            src="/background-effect.svg"
          />
        </div>
        <div className="rounded-3xs bg-card-base-01-night flex flex-col items-start justify-start pt-[1.88rem] px-[3.13rem] pb-[3.13rem] relative gap-[1.69rem] border-[1px] border-solid border-card-border-night">
          <div className="self-stretch flex flex-col items-end justify-start gap-[1.88rem] z-[0]">
            <img
              className="relative w-[7.88rem] h-[2rem] object-cover"
              alt=""
              src="/synack-logo@2x.png"
            />
            <div className="self-stretch relative leading-[1.81rem]">
              Liam brings an energy to his work that benefits the company. Liam
              is authentic and real. At Synack Liam's presence was palpable.
              Liam builds team from inside. He had the respect of all employees
              and a measurable impact on productivity and company culture.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.38rem] z-[1] text-[1rem] text-lighter-text-night">
            <b className="relative leading-[1.38rem] [background:linear-gradient(90.16deg,_#03cd8b,_#04b6de)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Aisling MacRunnels
            </b>
            <div className="relative text-[0.88rem] leading-[1.19rem] inline-block w-[29.31rem]">{`Chief Business & Growth Officer of Synack, Inc`}</div>
          </div>
          <img
            className="absolute my-0 mx-[!important] bottom-[0rem] left-[0rem] w-[20.63rem] h-[12.57rem] z-[2]"
            alt=""
            src="/background-effect.svg"
          />
          <AvatarAislingImage
            imageDimensions="/avataraisling@2x.png"
            avatarAislingIconWidth="10.5rem"
            avatarAislingIconHeight="10.5rem"
            avatarAislingIconPosition="absolute"
            avatarAislingIconMargin="0 !important"
            avatarAislingIconTop="-4.25rem"
            avatarAislingIconLeft="1rem"
            avatarAislingIconZIndex="3"
          />
        </div>
      </div>
    </div>
  );
};

export default HighlightedReferencesForm;
