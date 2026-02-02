"use client";

import { useEffect, useRef } from "react";

type InPagePushProps = {
  zoneId?: string;
};

export default function InPagePush({
  zoneId = "10555771",
}: InPagePushProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // prevent double injection
    if (ref.current.dataset.loaded === "true") return;
    ref.current.dataset.loaded = "true";

    const script = document.createElement("script");
    script.async = true;
    script.dataset.zone = zoneId;
    script.src = "https://nap5k.com/tag.min.js";

    ref.current.appendChild(script);
  }, [zoneId]);

  return (
    <div
      ref={ref}
      className="my-12 flex justify-center"
      aria-label="Advertisement"
    />
  );
}
