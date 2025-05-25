import { FunctionComponent } from "react";

export type ButtonType = {
  className?: string;

  /** Variant props */
  icon?: boolean;
  size?: string;
  state?: string;
  type?: string;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  icon = false,
  size = "Normal",
  state = "Default",
  type = "Primary",
}) => {
  return (
    <div
      className={`rounded bg-Brand-Primary flex flex-row items-center justify-center !pt-3.5 !pb-3.5 !pl-8 !pr-8 text-center text-base text-Neutral-White font-inter ${className}`}
      data-icon={icon}
      data-size={size}
      data-state={state}
      data-type={type}
    >
      <div className="relative leading-6 font-medium">Register</div>
    </div>
  );
};

export default Button;
