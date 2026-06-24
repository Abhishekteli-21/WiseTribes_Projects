"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function PromptBox({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      // fallback for older browsers
      const t = document.createElement("textarea");
      t.value = prompt;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full overflow-hidden rounded-[1.5rem] bg-grad p-[2px] shadow-[0_24px_60px_-32px_rgba(139,92,246,0.5)]">
      <div className="flex h-full flex-col rounded-[1.4rem] bg-white p-5 sm:p-6">
        {/* header */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-grad-soft text-violet-brand">
              <Icon name="spark" className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-sm font-bold leading-tight tracking-tight">
                Your build prompt
              </p>
              <p className="text-xs text-muted">Copy it → paste into Claude</p>
            </div>
          </div>
          <button
            onClick={copy}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
              copied
                ? "bg-emerald-500 text-white"
                : "bg-grad text-white hover:scale-105 active:scale-95"
            }`}
          >
            <Icon name={copied ? "check" : "spark"} className="h-4 w-4" />
            {copied ? "Copied!" : "Copy prompt"}
          </button>
        </div>

        {/* prompt text */}
        <div className="relative min-h-0 flex-1 overflow-auto rounded-2xl bg-surface p-4">
          <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-ink/80">
{prompt}
          </pre>
        </div>

        <p className="mt-3 text-xs text-muted">
          Tip: paste this into Claude, download the file it makes, then drop it
          on Netlify to go live. ✨
        </p>

        {/* quick links to the two tools */}
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://claude.ai/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-grad px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          >
            Open Claude
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://app.netlify.com/drop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface"
          >
            Open Netlify
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
