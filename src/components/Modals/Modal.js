"use client";

import { X } from "@phosphor-icons/react";
import ReactModal from "react-modal";
import { useRef } from "react";
import { SquareButton } from "../Buttons";
import { RemoveScroll } from "react-remove-scroll";

export default function Modal({ onClose, isOpen, label, children }) {
  ReactModal.setAppElement("body");
  const modalRef = useRef();
  return (
    <RemoveScroll enabled={isOpen}>
      <ReactModal
        ref={modalRef}
        // contentLabel="Offer Modal"
        isOpen={isOpen}
        overlayClassName="bg-gray-500/20 backdrop-blur-sm fixed top-0 z-50 flex h-full w-full items-end md:p-8 overscroll-auto overflow-y-auto"
        preventScroll={true}
        onRequestClose={onClose}
        closeTimeoutMS={150}
        // bodyOpenClassName="modal-open-body"
        className="relative w-full overflow-hidden rounded-t-lg border-4 border-black
     bg-white py-6 shadow-lg md:m-auto md:max-w-[480px] md:rounded-lg"
      >
        <div className="mx-auto max-h-[70vh] overflow-y-auto px-6 md:max-h-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-shrink-0 items-center justify-between">
              <h1 className="font-display text-3xl font-bold text-blue-500">
                {label}
              </h1>
              <SquareButton
                icon={<X size={24} weight="bold" />}
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      </ReactModal>
    </RemoveScroll>
  );
}
