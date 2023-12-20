import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import React from "react";
import { Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const textFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MarketingPage() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex space-x-4 items-center justify-center max-w-sm text-center bg-slate-950 rounded-full">
          <Medal className="p-4 text-white" size={60} />
          <h1 className="text-white pr-6 text-[0.88rem] shadow-lg">
            Number 1 Task Management Software
          </h1>
        </div>
        <h2 className="p-4 text-[2.5rem]">Welcome to the Task Plugin Dawg</h2>
        <h2 className="p-4">Work Forward</h2>
      </div>
      <div className="flex justify-center items-center max-w-2xl text-center">
        <p className={cn("text-small", textFont.className)}>
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua." "lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua." "lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua."
        </p>
      </div>
      <Button className="p-4 mt-4">Get Started</Button>
    </section>
  );
}
