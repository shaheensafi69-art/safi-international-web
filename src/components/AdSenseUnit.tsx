"use client";

import React, { useEffect, useRef } from "react";
import { FaShieldAlt } from "react-icons/fa";

interface AdSenseUnitProps {
  slot?: string;
  layoutKey?: string;
  client?: string;
  format?: string;
  labelEn?: string;
  labelFa?: string;
  lang?: "en" | "fa";
  variant?: "in-feed" | "banner" | "sidebar";
  className?: string;
}

export default function AdSenseUnit({
  slot = "5523998767",
  layoutKey = "-fb+5w+4e-db+86",
  client = "ca-pub-6551903544426492",
  format = "fluid",
  labelEn = "SPONSORED PARTNER",
  labelFa = "حامی استراتژیک • آگهی تجاری",
  lang = "en",
  variant = "in-feed",
  className = "",
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Avoid double push in React 19 strict mode or client-side navigation
    if (pushedRef.current) return;

    try {
      if (typeof window !== "undefined") {
        // Check if this ins tag hasn't already been filled
        if (adRef.current && !adRef.current.hasAttribute("data-adsbygoogle-status")) {
          // @ts-expect-error window.adsbygoogle global
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      }
    } catch (e) {
      // Gracefully catch adblocker or duplicate push errors
      console.debug("AdSense push:", e);
    }
  }, []);

  const isRtl = lang === "fa";
  const badgeLabel = isRtl ? labelFa : labelEn;

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-300 ${
        variant === "in-feed"
          ? "border border-amber-500/20 bg-zinc-950/80 backdrop-blur-xl rounded-3xl p-4 sm:p-6 shadow-2xl hover:border-amber-400/40"
          : "border border-white/10 bg-zinc-950/60 backdrop-blur-lg rounded-2xl p-4"
      } ${className}`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Decorative Gold Glow in Background */}
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Luxury Executive Sponsor Badge */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400/90 font-semibold">
            {badgeLabel}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-600 text-[10px] font-mono">
          <FaShieldAlt className="text-zinc-600" size={10} />
          <span className="tracking-widest uppercase">Verified Ad</span>
        </div>
      </div>

      {/* Google AdSense In-Feed / Fluid Unit */}
      <div className="w-full overflow-hidden min-h-[120px] flex items-center justify-center">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-format={format}
          data-ad-layout-key={layoutKey}
          data-ad-client={client}
          data-ad-slot={slot}
        />
      </div>
    </div>
  );
}
