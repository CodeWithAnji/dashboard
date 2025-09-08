import React from "react";
import WidgetCard from "./WidgetCard";
import DonutChart from "./DonutChart";

export default function CloudRiskChart() {
  const data = [
    { name: "Failed", value: 1689 },
    { name: "Warning", value: 681 },
    { name: "Not Available", value: 36 },
    { name: "Passed", value: 7253 },
  ];
  const colors = ["#dc2626", "#facc15", "#d1d5db", "#22c55e"];

  return (
    <WidgetCard title="Cloud Account Risk Assessment">
      <DonutChart
        data={data}
        colors={colors}
        totalLabel={`${data.reduce((a, b) => a + b.value, 0)} Total`}
      />
    </WidgetCard>
  );
}
