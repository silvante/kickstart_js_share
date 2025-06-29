import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full text-start">
      <h1 className="text-3xl font-semibold">{children}</h1>
    </div>
  );
}
