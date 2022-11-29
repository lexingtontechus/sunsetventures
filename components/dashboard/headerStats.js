import React from "react";

// components

import CardStats from "./cards/cardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-trueZinc-900 p-8">
        <div className="mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PROFIT/LOSS"
                  statTitle="$350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-trueEmerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-trueRed-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="WIN %"
                  statTitle="70.90%"
                  statArrow="up"
                  statPercent="71.19"
                  statPercentColor="text-trueEmerald-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-trueOrange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOTAL TRADES"
                  statTitle="924"
                  statArrow="up"
                  statPercent="1.10"
                  statPercentColor="text-trueOrange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-truePink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49.65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-trueEmerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-trueBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
