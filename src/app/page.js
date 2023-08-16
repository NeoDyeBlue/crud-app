"use client";

import Image from "next/image";
import { Base } from "@/components/Building";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const scopeRef = useRef();
  const buildingsRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let buildings = gsap.utils.toArray(".building");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scopeRef.current,
          end: () => `+=${buildingsRef.current.offsetWidth}`,
          scrub: 1,
          pin: true,
        },
      });

      timeline
        .to(buildings, { xPercent: -100 * buildings.length - 1 }, 0)
        .to("#bg1", { x: -120, ease: "none" }, 0)
        .to("#bg2", { x: -60, ease: "none" }, 0);
    }, scopeRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <main
      ref={scopeRef}
      id="main"
      className="min-h-screen w-full relative max-h-screen flex flex-col justify-end overscroll-none"
    >
      {/* backgrounds */}
      <div
        id="bg1"
        className="absolute z-[-1] w-[150%] h-screen bg-[url('/buildings1.svg')] bg-[bottom_30px_center] bg-repeat-x"
      ></div>
      <div
        id="bg2"
        className="absolute z-[-2] w-[150%] h-screen bg-[url('/buildings2.svg')] bg-[bottom_150px_center] bg-repeat-x"
      ></div>
      <div className="fixed z-[-3] top-0 w-full h-screen bg-gradient-to-b from-[#bed5fa] from-10% to-white"></div>
      {/* buildings */}
      <div
        ref={buildingsRef}
        id="buildings"
        className="flex flex-row gap-24 px-8 flex-shrink-0"
      >
        <Base />
        <Base color="#edb93e" />
        <Base color="#b63eed" />
        <Base />
        <Base />
        <Base />
        <div className="building w-[320px] h-full flex-shrink-0 bg-black"></div>
      </div>
      {/* road */}
      <div className="h-[30px] w-full bg-gray-300 border-b-8 border-gray-400 -mt-[0.35rem]"></div>
      <div className="bg-gray-500 h-[100px] w-full"></div>
    </main>
  );
}
