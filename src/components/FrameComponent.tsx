import { FunctionComponent } from "react";
import Logo from "./Logo";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <header
      className={`absolute top-[0px] left-[0px] bg-Neutral-Silver w-full overflow-hidden flex flex-row items-start justify-between !pt-[22px] !pb-[22px] !pl-[105px] !pr-[120px] box-border gap-5 max-w-full text-center text-sm text-Brand-Primary font-inter mq750:!pl-[52px] mq750:!pr-[60px] mq750:box-border mq450:!pl-5 mq450:!pr-5 mq450:box-border ${className}`}
    >
      <div className="relative hidden">
        <nav className="!m-0 self-stretch overflow-hidden flex flex-row items-center justify-between gap-5 text-left text-base text-Text-Gray-900 font-inter mq1050:hidden">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-6 font-medium">Home</div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-6">Service</div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-6">Feature</div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-6">Product</div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-6">Testimonial</div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-6">FAQ</div>
          </div>
        </nav>
      </div>
      <Logo />
      <div className="overflow-hidden flex flex-row items-start justify-start gap-3.5">
        <div className="rounded-md bg-Neutral-Silver flex flex-row items-center justify-start !pt-2.5 !pb-2.5 !pl-5 !pr-5">
          <div className="relative leading-5 font-medium">Login</div>
        </div>
        <div className="rounded-md bg-Brand-Primary flex flex-row items-center justify-start !pt-2.5 !pb-2.5 !pl-5 !pr-5 text-Neutral-White">
          <div className="relative leading-5 font-medium">Sign up</div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
