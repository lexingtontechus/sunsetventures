import React from "react";

// components

export default function CardPageVisits() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-0 max-w-full flex-grow flex-1">
              <h3 className="uppercase font-semibold text-base text-trueZinc-700">
                Top Trades
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-trueZinc-500 text-white active:bg-trueZinc-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 text-trueZinc-700 align-middle border border-solid border-trueZinc-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Symbol
                </th>
                <th className="px-6 text-trueZinc-700 align-middle border border-solid border-trueZinc-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Trade
                </th>
                <th className="px-6 text-trueZinc-700 align-middle border border-solid border-trueZinc-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Lot
                </th>
                <th className="px-6 text-trueZinc-700 align-middle border border-solid border-trueZinc-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Profit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  EURUSD
                </th>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Buy
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1.2
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-trueEmerald-500 mr-4"></i>
                  150.12
                </td>
              </tr>
              <tr>
                <th className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  EURUSD
                </th>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  SELL
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1.19
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-trueEmerald-500 mr-4"></i>
                  139.30
                </td>
              </tr>
              <tr>
                <th className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  EURUSD
                </th>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Buy
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1.21
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-trueEmerald-500 mr-4"></i>
                  126.20
                </td>
              </tr>
              <tr>
                <th className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  EURUSD
                </th>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Buy
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1.47
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-trueEmerald-500 mr-4"></i>
                  115.87{" "}
                </td>
              </tr>
              <tr>
                <th className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  EURUSD
                </th>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  BUT
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1.90
                </td>
                <td className="text-trueZinc-700 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-trueEmerald-500 mr-4"></i>
                  114.53
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
