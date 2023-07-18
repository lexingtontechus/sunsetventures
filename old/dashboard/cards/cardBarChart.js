import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  datasets: [
    {
      label: "# of Trades",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export default function CardBarChart() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-trueZinc-50 w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-trueZinc-700 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-trueZinc-700 text-xl font-semibold">
                Total Trades
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <Bar
              data={data}
              width={350}
              height={350}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
