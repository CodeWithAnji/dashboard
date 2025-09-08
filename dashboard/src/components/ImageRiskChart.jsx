import React from "react";
import WidgetCard from "./WidgetCard";
import DonutChart from "./DonutChart";
import riskData from "../data/imageRiskData.json";

export default function ImageRiskChart() {
  const { critical, high, medium, low } = riskData;

  const data = [
    { name: "Critical", value: critical },
    { name: "High", value: high },
    { name: "Medium", value: medium },
    { name: "Low", value: low },
  ];

  const colors = ["#b91c1c", "#f97316", "#facc15", "#9ca3af"];

  return (
    <WidgetCard title="Image Risk Assessment">
      <DonutChart
        data={data}
        colors={colors}
        totalLabel={`${critical + high + medium + low} Total`}
      />
    </WidgetCard>
  );
}
