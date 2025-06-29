import React from "react";

export default function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full text-start">
      <p className="text-lg">{children}</p>
    </div>
  );
}
