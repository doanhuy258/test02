import { FunctionComponent } from "react";
import NationalAssociations from "./NationalAssociations";

export type CommunityType = {
  className?: string;
};

const Community: FunctionComponent<CommunityType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-4 text-center text-4xl text-Neutral-D-Grey font-inter ${className}`}
    >
      <div className="w-[1440px] flex flex-col items-center justify-start gap-2">
        <h1 className="!m-0 w-[542px] relative text-[length:inherit] leading-[44px] font-semibold font-[inherit] inline-block mq450:text-[22px] mq450:leading-[26px] mq1050:text-[29px] mq1050:leading-[35px]">
          Manage your entire community in a single system
        </h1>
        <div className="self-stretch relative text-base leading-6 text-Neutral-Grey">
          Who is Nextcent suitable for?
        </div>
      </div>
      <section className="w-[1440px] flex flex-row items-center justify-between !pt-0 !pb-0 !pl-36 !pr-36 box-border gap-0 text-center text-[28px] text-Neutral-D-Grey font-inter lg:!pl-[72px] lg:!pr-[72px] lg:box-border mq750:!pl-9 mq750:!pr-9 mq750:box-border">
        <div className="w-[299px] shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] rounded-lg bg-Neutral-White flex flex-col items-center justify-start !pt-6 !pb-6 !pl-8 !pr-0 box-border gap-2">
          <div className="w-[267px] flex flex-col items-center justify-start gap-4">
            <div className="w-[65px] h-14 relative">
              <div className="absolute top-[56px] left-[65px] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px] bg-Tint-T5 w-[50px] h-[49px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
              <img
                className="absolute top-[0px] left-[0px] w-12 h-12 z-[1]"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
            <h2 className="!m-0 self-stretch relative text-[length:inherit] leading-9 font-bold font-[inherit] mq450:text-[22px] mq450:leading-[29px]">
              Membership Organisations
            </h2>
          </div>
          <div className="flex flex-row items-start justify-start text-sm text-Neutral-Grey">
            <div className="w-[251px] relative leading-5 inline-block shrink-0">
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>
        </div>
        <NationalAssociations
          icon="/icon-1.svg"
          nationalAssociations="National Associations"
        />
        <NationalAssociations
          icon="/icon-2.svg"
          nationalAssociations="Clubs And Groups"
          nationalAssociationsAlignSelf="unset"
          nationalAssociationsWidth="231px"
          nationalAssociationsDisplay="inline-block"
          ourMembershipManagementWidth="251px"
        />
      </section>
    </div>
  );
};

export default Community;
