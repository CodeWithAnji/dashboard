import React from "react";
import riskData from "../data/imageRiskData.json";

export default function RiskAssessmentChart() {
  const { totalVulnerabilities, critical, high, medium, low } = riskData;

  const colors = {
    critical: "bg-red-700",
    high: "bg-orange-500",
    medium: "bg-yellow-400",
    low: "bg-gray-300",
  };

  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <h3 className="text-md font-semibold text-gray-800">
        Image Risk Assessment
      </h3>
      <p className="text-sm text-gray-500">
        {totalVulnerabilities} Total Vulnerabilities
      </p>

      {/* Progress bar */}
      <div className="mt-4 h-4 w-full overflow-hidden rounded-full bg-gray-200 flex">
        <div
          className={`${colors.critical} h-4`}
          style={{ width: `${(critical / totalVulnerabilities) * 100}%` }}
        />
        <div
          className={`${colors.high} h-4`}
          style={{ width: `${(high / totalVulnerabilities) * 100}%` }}
        />
        <div
          className={`${colors.medium} h-4`}
          style={{ width: `${(medium / totalVulnerabilities) * 100}%` }}
        />
        <div
          className={`${colors.low} h-4`}
          style={{ width: `${(low / totalVulnerabilities) * 100}%` }}
        />
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-700">
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-sm bg-red-700"></span>
          Critical ({critical})
        </div>
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-sm bg-orange-500"></span>
          High ({high})
        </div>
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-sm bg-yellow-400"></span>
          Medium ({medium})
        </div>
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-sm bg-gray-300"></span>
          Low ({low})
        </div>
      </div>
    </div>
  );
}
