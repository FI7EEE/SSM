import React from "react";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima";
import { OverlapGroupWrapperByAnima } from "./sections/OverlapGroupWrapperByAnima/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";

export const SsmCom = () => {
  return (
    <main className="bg-[#d9d9d9] flex justify-center w-full">
      <div className="bg-[#d9d9d9] overflow-hidden border border-solid border-black w-full max-w-[1366px] flex flex-col">
        <GroupWrapperByAnima />
        <OverlapGroupWrapperByAnima />
        <div className="w-full">
          <GroupByAnima />
          <OverlapWrapperByAnima />
        </div>
      </div>
    </main>
  );
};
