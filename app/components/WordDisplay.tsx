"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const WordDisplay = () => {
  const [word, setWord] = useState<string>("");
  const params = useSearchParams();
  const textDisplay = params.get("text");
  const logParam = useMutation(api.visits.logParam);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWord(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      const url = window.location.origin;
      window.location.href = `${url}?text=${word}`;
    }
  };

  useEffect(() => {
    if (textDisplay) {
      logParam({ param: textDisplay });
    }
  }, [textDisplay, logParam]);

  return (
    <div>
      <div>
        <main>
          <div className="text-2xl font-[Inter]">
            <form className="flex justify-center items-center min-h-screen">
              <textarea
                onChange={handleChange}
                placeholder={
                  textDisplay ? textDisplay : "enter wrds and press enter"
                }
                className="resize-none field-sizing-content outline-none h-screen max-w-45 text-center placeholder-white translate-y-1/2"
                value={word}
                onKeyDown={handleKeyDown}
              />
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WordDisplay;
