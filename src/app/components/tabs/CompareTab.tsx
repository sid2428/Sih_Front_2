"use client";

import React from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function CompareTab({ theme }) {
    const commonDepth = [0, 100, 200, 400, 600, 800, 1000];
    const floatA_data = { y: commonDepth, x: [25, 22, 18, 12, 8, 6, 5], name: 'Float #98765 (Warm Core)', type: 'scatter', mode: 'lines+markers', line: { color: '#3b82f6', width: 3 }, marker: { symbol: 'circle', size: 8 } };
    const floatB_data = { y: commonDepth, x: [18, 17, 15, 14, 11, 7, 4], name: 'Float #12345 (Cold Intrusion)', type: 'scatter', mode: 'lines+markers', line: { color: '#ef4444', width: 3, dash: 'dash' }, marker: { symbol: 'square', size: 8 } };
    const floatC_data = { y: commonDepth, x: [22, 19, 17, 10, 9, 8, 6], name: 'Float #54321 (Standard Profile)', type: 'scatter', mode: 'lines+markers', line: { color: '#10b981', width: 3 }, marker: { symbol: 'diamond', size: 8 } };
    const layout = { title: 'Comparative Profile Analysis: Temperature vs. Depth', paper_bgcolor: 'transparent', plot_bgcolor: 'transparent', font: { color: theme === 'dark' ? '#e6edf3' : '#1a202c', family: 'sans-serif' }, xaxis: { title: 'Temperature (°C)', gridcolor: theme === 'dark' ? '#374151' : '#e5e7eb', zeroline: false }, yaxis: { title: 'Depth (m)', autorange: 'reversed', gridcolor: theme === 'dark' ? '#374151' : '#e5e7eb', zeroline: false }, legend: { orientation: 'h', y: -0.2, x: 0.5, xanchor: 'center' }, hovermode: 'x unified' };
    return (
        <section className="bg-card p-4 sm:p-6 rounded-xl shadow-lg animate-fade-in"><h3 className="text-xl font-bold mb-4">Float Profile Comparison</h3><div className="w-full h-[65vh]"><Plot data={[floatA_data, floatB_data, floatC_data]} layout={layout} style={{ width: "100%", height: "100%" }} useResizeHandler /></div></section>
    );
};