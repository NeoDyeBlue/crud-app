"use client";

import { Base } from "@/components/Building";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useLayoutEffect, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { Modal } from "@/components/Modals";
import { EmployeeForm } from "@/components/Forms";
import useSWR from "swr";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scopeRef = useRef();
  const buildingsRef = useRef();
  const { data, error, isLoading, isValidating, mutate } =
    useSWR("/api/employees");

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (data?.employees?.length) {
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
          .to(
            buildings,
            {
              xPercent: -100 * buildings.length - 1,
            },
            0
          )
          .to("#bg1", { x: -120, ease: "none" }, 0)
          .to("#bg2", { x: -60, ease: "none" }, 0);
      }
    }, scopeRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [data?.employees]);

  const employeeBuildings = data?.employees?.length
    ? data?.employees.map((employee) => (
        <Base
          key={employee._id}
          employeeData={employee}
          color={employee?.color}
          mutate={() => mutate()}
        />
      ))
    : [];

  return (
    <main
      ref={scopeRef}
      id="main"
      className="min-h-screen w-full relative max-h-screen flex flex-col justify-end overscroll-none"
    >
      <Modal
        label="New Employee"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <EmployeeForm
          onCancel={() => setIsModalOpen(false)}
          onAfterSubmit={() => {
            setIsModalOpen(false);
            mutate();
          }}
        />
      </Modal>
      <div className="flex items-center justify-between fixed w-screen top-0 p-8 z-50">
        <h1
          className="text-black text-4xl font-bold leading-0 shadow-lg
      bg-yellow-400 px-4 py-3 rounded-l-[10px] rounded-r-[10px] border-4 border-black -rotate-3"
        >
          CRUD City
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="font-display flex items-center justify-center leading-none text-4xl h-full w-[60px]
        uppercase bg-green-400 text-white rounded-full aspect-square border-4 border-green-600"
        >
          <Plus size={32} className="text-green-700" weight="bold" />
        </button>
      </div>
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
        className="flex flex-row gap-10 px-8 flex-shrink-0"
      >
        {employeeBuildings}
      </div>
      {/* road */}
      <div className="h-[30px] w-full bg-gray-300 border-b-8 border-gray-400 -mt-[0.35rem]"></div>
      <div className="bg-gray-500 h-[85px] border-t-8 border-white w-full relative"></div>
      <p className="fixed bottom-8 right-8 text-white text-xs">
        Made with Next.js and MongoDB
      </p>
    </main>
  );
}
