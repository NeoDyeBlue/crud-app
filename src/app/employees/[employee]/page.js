"use client";
import { Floor } from "@/components/Building";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowFatLeft, MapPin, Plus } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { SchoolForm } from "@/components/Forms";
import { Modal } from "@/components/Modals";
import { format, parseISO } from "date-fns";

export default function Employee({ params }) {
  gsap.registerPlugin(ScrollTrigger);
  const scopeRef = useRef(null);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `/api/employees/${params?.employee}/schools`
  );

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scopeRef.current,
          end: () => `+=${scopeRef.current.offsetHeight}`,
          scrub: 1,
        },
      });

      timeline
        .to("#bg1", { y: -40, ease: "none" }, 0)
        .to("#bg2", { y: -80, ease: "none" }, 0);
    }, scopeRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  const employeeSchools = data?.schools?.length
    ? data?.schools.map((school) => (
        <Floor
          key={school._id}
          color={data?.employee?.color}
          schoolData={school}
          mutate={() => mutate()}
        />
      ))
    : [];

  return (
    <main
      ref={scopeRef}
      id="main"
      className="min-h-screen w-full relative flex flex-col overscroll-none p-8 pb-0 gap-8"
    >
      <Modal
        label="New School"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <SchoolForm
          employeeId={params?.employee}
          onCancel={() => setIsModalOpen(false)}
          onAfterSubmit={() => {
            setIsModalOpen(false);
            mutate();
          }}
        />
      </Modal>
      {/* backgrounds */}
      <div
        id="bg1"
        className="fixed z-[-1] left-0 w-[100%] h-[110%] bg-[url('/buildings1.svg')] bg-[bottom_center] bg-repeat-x"
      ></div>
      <div
        id="bg2"
        className="fixed z-[-2] left-0 w-[100%] h-screen bg-[url('/buildings2.svg')] bg-[bottom_center] bg-repeat-x"
      ></div>
      <div className="fixed z-[-3] left-0 top-0 w-full h-screen bg-gradient-to-b from-[#bed5fa] from-10% to-white"></div>
      <div
        id="info"
        className="w-full flex items-center justify-center text-center flex-col gap-3 drop-shadow-md"
      >
        <h1 className="font-display text-5xl font-bold text-white">
          {data?.employee?.firstName} {data?.employee?.middleName}{" "}
          {data?.employee?.lastName}
        </h1>
        <p className="font-semibold text-white">{data?.employee?._id}</p>
      </div>
      {/* back arrow */}
      <button
        onClick={() => router.push("/")}
        className="w-fit fixed top-8 left-8 z-20 drop-shadow-md"
      >
        <ArrowFatLeft size={56} weight="fill" className="text-white" />
      </button>
      {/* info */}
      <div className="flex flex-col gap-2 max-w-[300px] text-white text-lg fixed bottom-8 left-8 drop-shadow-md">
        <p>
          <span className="font-semibold">Age:</span> {data?.employee?.age}
        </p>
        <p>
          <span className="font-semibold">Birthday:</span>{" "}
          {data?.employee
            ? format(parseISO(data?.employee?.birthday), "PP")
            : ""}
        </p>
        <p>
          <span className="font-semibold">Civil Status:</span>{" "}
          {data?.employee?.civilStatus}
        </p>
      </div>
      {/* addresss */}
      <div className="flex text-lg text-white fixed bottom-8 right-8 flex-col items-end gap-2 text-right max-w-[300px] drop-shadow-md">
        <MapPin size={24} weight="fill" />
        <p>{data?.employee?.address}</p>
      </div>
      {/* floors */}
      <div className="w-full flex flex-col items-center pt-8 gap-8 z-10 mt-auto">
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-[100px] hover:bg-white hover:text-black w-[100px] flex items-center justify-center 
        rounded-full border-4 border-white text-white transition-colors drop-shadow-md"
        >
          <Plus size={56} weight="bold" />
        </button>
        <div className="mt-auto">{employeeSchools.reverse()}</div>
      </div>
    </main>
  );
}
