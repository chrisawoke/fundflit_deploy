"use client";
import { Hero } from "@/components";

import FAQs_Section from "@/components/FAQs_Section";
import Features from "@/components/Features";
import { useWeb5 } from "@/plugins/web5.client";
import { configureProtocol, queryProtocol} from "@/utils/web5.utils";

import { useEffect } from "react";
import Contact from "./about/Contact";

export default function Home() {
  const { web5, myDID } = useWeb5();

  useEffect(() => {
    if (web5) {configureProtocol(web5, myDID); queryProtocol(web5)}
  }, [web5]);
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <FAQs_Section />
      <Contact />
    </main>
  );
}
