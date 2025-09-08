import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CloudAccountsChart from "../components/CloudAccountsChart";
import CloudRiskChart from "../components/CloudRiskChart";
import ImageRiskChart from "../components/ImageRiskChart";
import EmptyWidget from "../components/EmptyWidget";
import RiskAssessmentChart from "../components/RiskAssessmentChart";
import AddWidgetForm from "../components/AddWidgetForm";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "1a",
          title: "Cloud Accounts",
          component: <CloudAccountsChart />,
        },
        { id: "1b", title: "Cloud Risk", component: <CloudRiskChart /> },
      ],
    },
    {
      id: 2,
      title: "CWPP Dashboard",
      widgets: [
        { id: "2a", title: "Image Risk", component: <ImageRiskChart /> },
        {
          id: "2b",
          title: "Workload Alerts", // 🔒 Always keep this
          component: <EmptyWidget title="Workload Alerts" />,
          permanent: true,
        },
      ],
    },
    {
      id: 3,
      title: "Registry Scan",
      widgets: [
        {
          id: "3a",
          title: "Risk Assessment 1",
          component: <RiskAssessmentChart />,
        },
        {
          id: "3b",
          title: "Risk Assessment 2",
          component: <RiskAssessmentChart />,
        },
      ],
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleAddWidget = (sectionId, widgetData) => {
    const newWidget = {
      id: Date.now().toString(),
      title: widgetData.title,
      component:
        widgetData.type === "chart" ? (
          <CloudAccountsChart />
        ) : widgetData.type === "risk" ? (
          <RiskAssessmentChart />
        ) : (
          <EmptyWidget title={widgetData.title} />
        ),
    };

    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, widgets: [...section.widgets, newWidget] }
          : section
      )
    );
  };

  // Search filter
  const filteredSections = sections.map((section) => ({
    ...section,
    widgets: section.widgets.filter((w) =>
      w.title.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar search={search} setSearch={setSearch} />

      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredSections.map((section) => (
          <React.Fragment key={section.id}>
            {/* Section title */}
            <div className="col-span-full text-md font-semibold">
              {section.title}
            </div>

            {/* Section widgets */}
            {section.widgets.map((w) => (
              <div key={w.id} className="col-span-1">
                {w.component}
              </div>
            ))}

            {/* + Add Widget button (always last) */}
            <div
              className="col-span-1 cursor-pointer"
              onClick={() => {
                setActiveSection(section.id);
                setIsFormOpen(true);
              }}
            >
              <EmptyWidget title="+ Add Widget" />
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Slide-in widget form */}
      <AddWidgetForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAdd={(widget) => handleAddWidget(activeSection, widget)}
      />
    </div>
  );
}
