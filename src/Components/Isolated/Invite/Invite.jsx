
import React from "react";
import { Zoom } from "react-reveal";
import InviteTabs from "../Tabs/InviteTabs";

const Invite = () => {

  return (
     <div className="bg-primary md:pb-[55px] md:p-5">
      <div>
      
        <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-4 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
          ইনভাইট
        </h1>
        <Zoom>
          <h1        style={{ fontFamily: "Hind Siliguri" }} className="text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
            ইনভাইট
          </h1>
        </Zoom>
        <InviteTabs />
      </div>
    </div>
  );
};

export default Invite;