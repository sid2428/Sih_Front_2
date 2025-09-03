"use client";

import React from "react";

export default function InsightsTab() {
    return (
        <section className="grid md:grid-cols-3 gap-6">
            {[ { title: 'Unusual Salinity Drop', text: 'Detected a significant drop in salinity in the Bay of Bengal, potentially linked to increased freshwater influx.' },{ title: 'Oxygen Minimum Zone', text: 'Analysis shows an expansion of the Oxygen Minimum Zone in the Arabian Sea over the last quarter.' },{ title: 'Heatwave Anomaly', text: 'An underwater heatwave anomaly was observed in the Southern Indian Ocean, with temperatures 2°C above average.' }].map((insight, i) => (
                <div key={i} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all transform">
                    <h4 className="font-bold text-lg">{insight.title}</h4>
                    <p className="text-sm mt-2 text-muted-foreground">{insight.text}</p>
                    <div className="mt-4"><button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">View Details</button></div>
                </div>
            ))}
        </section>
    );
};