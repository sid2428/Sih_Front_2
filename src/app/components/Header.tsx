"use client";

import React from "react";
import type { FC } from "react";
import type { Tab, TabConfig } from "../types";
import { Sun, Moon, MessageSquare, BarChart2, GitCompare, Zap, Info } from 'lucide-react';

const TABS: TabConfig[] = [
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "visualize", label: "Visualize", icon: BarChart2 },
  { id: "compare", label: "Compare", icon: GitCompare },
  { id: "insights", label: "Insights", icon: Zap },
  { id: "about", label: "About", icon: Info },
];

interface HeaderProps {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark' | ((theme: 'light' | 'dark') => 'light' | 'dark')) => void;
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

export default function Header({ theme, setTheme, activeTab, setActiveTab }: HeaderProps) {
    return (
        <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-200 dark:border-gray-800 bg-card shadow-sm">
            <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">🌊</div>
                <h1 className="text-xl font-bold tracking-tight">FloatChat</h1>
            </div>
            <nav className="hidden md:flex items-center gap-2 bg-muted p-1 rounded-lg">
                {TABS.map(({ id, label, icon: Icon }) => (
                    <button key={id} onClick={() => setActiveTab(id)} className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-background/60 hover:text-foreground"}`}>
                        <Icon size={16} />{label}
                    </button>
                ))}
            </nav>
            <div className="flex items-center gap-3">
                <button onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} className="p-2 rounded-full hover:bg-muted transition-colors">
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </header>
    );
}