"use client";

import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CopyCode({ code, language = "ts" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-black/50">
      <div className="flex justify-between items-center px-2 py-2 bg-black/50 border-b border-gray-700">
        <span className="text-sm text-gray-400 px-2">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs hover:text-white px-2 py-1 rounded"
        >
          {copied ? <Check /> : <Clipboard />}
        </button>
      </div>
      <pre className="p-4 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
