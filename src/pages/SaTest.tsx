import { FunctionComponent } from "react";
import HeroSection from "../components/HeroSection";
import Clients from "../components/Clients";
import Community from "../components/Community";
import FrameComponent from "../components/FrameComponent";

const SaTest: FunctionComponent = () => {
  return (
    <div className="w-full h-[4376px] relative bg-Neutral-White overflow-hidden leading-[normal] tracking-[normal] mq750:h-auto mq750:min-h-[4376]">
      <main className="absolute top-[84px] left-[0px] flex flex-col items-start justify-start gap-10 w-full max-w-full mq750:h-auto mq750:gap-5">
        <HeroSection />
        <Clients />
        <Community />
      </main>
      <div className="absolute top-[657px] left-[calc(50%_-_23px)] flex flex-row items-start justify-start gap-2">
        <div className="h-2.5 w-2.5 relative rounded-[50%] bg-Brand-Primary" />
        <div className="h-2.5 w-2.5 relative rounded-[50%] bg-Brand-Primary opacity-[0.3]" />
        <div className="h-2.5 w-2.5 relative rounded-[50%] bg-Brand-Primary opacity-[0.3]" />
      </div>
      <FrameComponent />
    </div>
  );
};

export default SaTest;
