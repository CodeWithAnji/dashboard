import React from "react";
import WidgetCard from "./WidgetCard";
import DonutChart from "./DonutChart";

export default function CloudAccountsChart() {
  const data = [
    { name: "Connected", value: 2 },
    { name: "Not Connected", value: 2 },
  ];
  const colors = ["#3b82f6", "#cbd5e1"]; // blue, gray

  return (
    <WidgetCard title="Cloud Accounts">
      <DonutChart
        className="h-40"
        data={data}
        colors={colors}
        totalLabel={`${data.reduce((a, b) => a + b.value, 0)} Total`}
      />
    </WidgetCard>
  );
}
