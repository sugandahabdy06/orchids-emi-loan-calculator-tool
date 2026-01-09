"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LegalFooter() {
  return (
    <div className="mt-16 border-t pt-6 text-center">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
}
