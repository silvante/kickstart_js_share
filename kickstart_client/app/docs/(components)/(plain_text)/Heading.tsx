import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full text-start">
      <h2 className="text-2xl font-semibold">
        <span className="text-white/70">#</span> {children}
      </h2>
    </div>
  );
}
