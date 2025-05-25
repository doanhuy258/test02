import { FunctionComponent } from "react";

export type ClientsType = {
  className?: string;
};

const Clients: FunctionComponent<ClientsType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] flex flex-col items-center justify-start !pt-0 !pb-0 !pl-5 !pr-5 box-border gap-4 text-center text-4xl text-Neutral-D-Grey font-inter ${className}`}
    >
      <div className="w-[1110px] flex flex-col items-center justify-start gap-2">
        <h1 className="!m-0 self-stretch relative text-[length:inherit] leading-[44px] font-semibold font-[inherit] mq450:text-[22px] mq450:leading-[26px] mq1050:text-[29px] mq1050:leading-[35px]">
          Our Clients
        </h1>
        <div className="self-stretch relative text-base leading-6 text-Neutral-Grey">
          We have been working with some Fortune 500+ clients
        </div>
      </div>
      <div className="w-[1152px] h-[98px] flex flex-row items-center justify-between gap-0 mq750:h-auto mq750:flex-wrap mq750:justify-center">
        <img
          className="h-12 w-12 relative rounded-lg"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <img
          className="h-12 w-12 relative rounded-lg"
          alt=""
          src="/logo-1.svg"
        />
        <img
          className="h-12 w-12 relative rounded-lg"
          alt=""
          src="/logo-2.svg"
        />
        <img
          className="h-12 w-12 relative rounded-lg"
          alt=""
          src="/logo-3.svg"
        />
        <img
          className="h-12 w-12 relative rounded-lg"
          alt=""
          src="/logo-4.svg"
        />
        <img
          className="h-12 w-12 relative rounded-lg"
          alt=""
          src="/logo-5.svg"
        />
        <img
          className="h-12 w-12 relative rounded-lg"
          alt=""
          src="/logo-2.svg"
        />
      </div>
    </section>
  );
};

export default Clients;
