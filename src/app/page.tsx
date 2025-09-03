"use client";

import React, { useState, useEffect } from "react";
import type { LatLngExpression } from "leaflet";

// Component Imports
import Header from "./components/Header";
import ChatTab from "./components/tabs/ChatTab";
import VisualizeTab from "./components/tabs/VisualizeTab";
import CompareTab from "./components/tabs/CompareTab";
import InsightsTab from "./components/tabs/InsightsTab";
import AboutTab from "./components/tabs/AboutTab";
import type { Tab, MapTransition } from "./types";

export const mockFloats = [
    { id: 1, platform_number: 98765, project_name: "INCOIS", last_cycle: 15, position: [-10.0, 85.0] as LatLngExpression, trajectory: [[-14.0, 75.0], [-12.5, 76.5], [-11.0, 75.5], [-10.5, 78.0], [-9.0, 79.0], [-11.0, 82.0], [-12.0, 84.0], [-10.0, 85.0]] as LatLngExpression[] },
    { id: 2, platform_number: 12345, project_name: "NOAA", last_cycle: 22, position: [-15.0, 78.0] as LatLngExpression, trajectory: [[-8.0, 77.0], [-10.0, 79.0], [-12.0, 81.0], [-14.0, 80.0], [-16.0, 79.0], [-15.0, 78.0]] as LatLngExpression[] },
    { id: 3, platform_number: 54321, project_name: "CSIRO", last_cycle: 8, position: [-13.0, 83.0] as LatLngExpression, trajectory: [[-18.0, 80.0], [-16.0, 81.0], [-14.0, 79.0], [-12.0, 81.5], [-11.5, 83.5], [-13.0, 83.0]] as LatLngExpression[] },
];

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeTab, setActiveTab] = useState<Tab>("visualize");
  const [messages, setMessages] = useState([]);
  const [chatHasVisuals, setChatHasVisuals] = useState(false);
  
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([0, 80]);
  const [mapZoom, setMapZoom] = useState(3);
  const [selectedFloat, setSelectedFloat] = useState(null);
  const [regionSummary, setRegionSummary] = useState(null);
  const [mapTransition, setMapTransition] = useState<MapTransition>('fly');
  const [filters, setFilters] = useState({ startDate: "2023-03-01", endDate: "2023-03-31", region: "Indian Ocean", parameter: "Salinity", floatId: "" });

  const handleFloatSelect = (float) => { setMapTransition('fly'); setRegionSummary(null); setSelectedFloat(float); setMapCenter(float.position); setMapZoom(7); };
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { const { name, value } = e.target; setFilters((prev) => ({ ...prev, [name]: value })); };
  const handleApplyFilters = () => { setMapTransition('instant'); setSelectedFloat(null); setRegionSummary({ region: filters.region, floats: mockFloats }); const mockRegionCenters = { "Indian Ocean": [0, 80], "Equatorial Region": [0, -120], "North Atlantic": [40, -40], "Southern Ocean": [-60, 0] }; setMapCenter(mockRegionCenters[filters.region] || [0, 80]); setMapZoom(3); };
  const handleDetailClose = () => { setSelectedFloat(null); setRegionSummary(null); };

  useEffect(() => { document.documentElement.classList.toggle("dark", theme === "dark"); }, [theme]);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground font-sans">
      <Header theme={theme} setTheme={setTheme} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {activeTab === "chat" && <ChatTab messages={messages} setMessages={setMessages} theme={theme} chatHasVisuals={chatHasVisuals} setChatHasVisuals={setChatHasVisuals} />}
          {activeTab === "visualize" && <VisualizeTab floats={mockFloats} filters={filters} handleFilterChange={handleFilterChange} handleApplyFilters={handleApplyFilters} mapCenter={mapCenter} mapZoom={mapZoom} selectedFloat={selectedFloat} regionSummary={regionSummary} onFloatSelect={handleFloatSelect} onDetailClose={handleDetailClose} theme={theme} mapTransition={mapTransition} />}
          {activeTab === "compare" && <CompareTab theme={theme} />}
          {activeTab === "insights" && <InsightsTab />}
          {activeTab === "about" && <AboutTab />}
        </div>
      </main>
    </div>
  );
}