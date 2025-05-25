import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NationalAssociationsType = {
  className?: string;
  icon?: string;
  nationalAssociations?: string;

  /** Style props */
  nationalAssociationsAlignSelf?: CSSProperties["alignSelf"];
  nationalAssociationsWidth?: CSSProperties["width"];
  nationalAssociationsDisplay?: CSSProperties["display"];
  ourMembershipManagementWidth?: CSSProperties["width"];
};

const NationalAssociations: FunctionComponent<NationalAssociationsType> = ({
  className = "",
  icon,
  nationalAssociations,
  nationalAssociationsAlignSelf,
  nationalAssociationsWidth,
  nationalAssociationsDisplay,
  ourMembershipManagementWidth,
}) => {
  const nationalAssociationsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: nationalAssociationsAlignSelf,
      width: nationalAssociationsWidth,
      display: nationalAssociationsDisplay,
    };
  }, [
    nationalAssociationsAlignSelf,
    nationalAssociationsWidth,
    nationalAssociationsDisplay,
  ]);

  const ourMembershipManagementStyle: CSSProperties = useMemo(() => {
    return {
      width: ourMembershipManagementWidth,
    };
  }, [ourMembershipManagementWidth]);

  return (
    <div
      className={`w-[299px] shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] rounded-lg bg-Neutral-White flex flex-col items-center justify-start !pt-6 !pb-6 !pl-8 !pr-0 box-border gap-2 text-center text-[28px] text-Neutral-D-Grey font-inter ${className}`}
    >
      <div className="w-[267px] flex flex-col items-center justify-start gap-4">
        <img className="w-[65px] h-14 relative" alt="" src={icon} />
        <h2
          className="!m-0 self-stretch relative text-[length:inherit] leading-9 font-bold font-[inherit] mq450:text-[22px] mq450:leading-[29px]"
          style={nationalAssociationsStyle}
        >
          {nationalAssociations}
        </h2>
      </div>
      <div className="flex flex-row items-start justify-start text-sm text-Neutral-Grey">
        <div
          className="w-60 relative leading-5 inline-block shrink-0"
          style={ourMembershipManagementStyle}
        >
          Our membership management software provides full automation of
          membership renewals and payments
        </div>
      </div>
    </div>
  );
};

export default NationalAssociations;
