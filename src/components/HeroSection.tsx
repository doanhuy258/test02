import { FunctionComponent } from "react";
import Button from "./Button";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex-1 bg-Neutral-Silver flex flex-row items-center justify-start !pt-24 !pb-24 !pl-36 !pr-36 box-border gap-[104px] max-w-full lg:flex-wrap mq750:gap-[52px] mq750:!pl-[72px] mq750:!pr-[72px] mq750:box-border mq450:gap-[26px] mq450:!pl-5 mq450:!pr-5 mq450:box-border ${className}`}
    >
      <section className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[427px] text-left text-[64px] text-Neutral-Grey font-inter mq750:gap-4 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <h1 className="!m-0 self-stretch relative text-[length:inherit] leading-[76px] font-semibold font-[inherit] mq450:text-[38px] mq450:leading-[46px] mq1050:text-[51px] mq1050:leading-[61px]">
            {`Lessons and insights `}from 8 years
          </h1>
          <div className="self-stretch relative text-base leading-6">
            Where to grow your business as a photographer: site or social media?
          </div>
        </div>
        <Button icon={false} size="Medium" state="Default" type="Primary" />
      </section>
      <img
        className="w-[391px] relative max-h-full max-w-full lg:flex-1"
        loading="lazy"
        alt=""
        src="/illustration.svg"
      />
    </div>
  );
};

export default HeroSection;
