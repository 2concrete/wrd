"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const params = useSearchParams();
  const textDisplay = params.get("text");
  const logParam = useMutation(api.visits.logParam);

  useEffect(() => {
    if (textDisplay) {
      logParam({ param: textDisplay });
    }
  }, [textDisplay, logParam]);

  return (
    <div>
      <main>
        <div className="text-2xl font-[Inter] flex items-center justify-center min-h-screen">
          <p>{textDisplay ? textDisplay : "empty"}</p>
        </div>
      </main>
    </div>
  );
}
