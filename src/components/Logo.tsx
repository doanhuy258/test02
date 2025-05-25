import { FunctionComponent } from "react";

export type LogoType = {
  className?: string;
};

const Logo: FunctionComponent<LogoType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-2 ${className}`}
    >
      <img className="h-6 w-[35px] relative" alt="" src="/icon-3.svg" />
      <img
        className="h-[20.7px] w-[111.5px] relative"
        loading="lazy"
        alt=""
        src="/nexcent.svg"
      />
    </div>
  );
};

export default Logo;
