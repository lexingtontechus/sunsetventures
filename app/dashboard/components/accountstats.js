"use client";
import Subscriptions from "./subscriptions";
export default function AccountStats() {
  return (
    <div className="stats stats-vertical lg:stats-horizontal text-center bg-base-200">
      <div className="stat">
        <div className="stat-title font-bold text-primary">Current balance</div>
        <div className="stat-value text-secondary">$89,400</div>
        <p className="stat-desc">21% more than last month</p>
        <div className="stat-actions join justify-center">
          <button className="btn btn-sm btn-success join-item">Deposit</button>
          <button className="btn btn-sm btn-warning join-item">Withdraw</button>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title font-bold text-primary">Trades</div>
        <div className="stat-value">1853/10868</div>
        <span className="stat-desc">Current/YTD</span>
        <p className="stat-desc"></p>
        <div className="stat-actions justify-center">
          <button className="btn btn-sm btn-error">Stop Trades</button>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title font-bold text-primary">Profit/Loss</div>
        <div className="stat-value text-success">$500k</div>
        <p className="stat-desc"></p>
      </div>

      <div className="stat">
        <div className="stat-title font-bold text-primary">Win/Loss</div>
        <div className="stat-value">3628/1491</div>
        <span className="stat-desc">70.87% Ratio</span>
        <p className="stat-desc"></p>
      </div>
      <>
        <Subscriptions />
      </>
    </div>
  );
}
