"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const WordDisplay = () => {
  const [word, setWord] = useState<string>("");
  const params = useSearchParams();
  const textDisplay = params.get("text");
  const logParam = useMutation(api.visits.logParam);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `${window.location.href}${word}`;
  };

  useEffect(() => {
    if (textDisplay) {
      logParam({ param: textDisplay });
    }
  }, [textDisplay, logParam]);

  return (
    <div className="flex justify-center items-center">
      <div>
        <main>
          <div className="text-2xl font-[Inter] flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                placeholder={textDisplay ? textDisplay : "enter wrds"}
                className="outline-none w-30 placeholder-white"
                value={word}
              />
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WordDisplay;
