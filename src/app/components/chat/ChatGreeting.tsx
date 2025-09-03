"use client";

import React from 'react';

export default function ChatGreeting() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                    Hello!
                </span>
            </h1>
            <p className="mt-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 max-w-md">
                How can I help you explore the oceans today?
            </p>
        </div>
    );
};