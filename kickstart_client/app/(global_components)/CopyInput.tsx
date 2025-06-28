"use client";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

export default function CopyInput({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="py-3 px-4 bg-black/50 font-semibold rounded-xl flex gap-8">
      <code>$ {command}</code>
      <button onClick={copyToClipboard}>
        {copied ? <Check /> : <Clipboard />}
      </button>
    </div>
  );
}
