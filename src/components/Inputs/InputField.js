"use client";

import { Info, Eye, EyeClosed } from "@phosphor-icons/react";
import { useState } from "react";
import { useField } from "formik";

export default function InputField({ label, infoMessage, ...props }) {
  const [showPass, setShowPass] = useState(false);
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        {label && <label className="font-display font-medium">{label}</label>}
        {props.type == "password" ? (
          <button
            type="button"
            className="ml-auto"
            onClick={() => setShowPass((prev) => !prev)}
          >
            {!showPass && <Eye size={20} weight="bold" />}
            {showPass && <EyeClosed size={20} weight="bold" />}
          </button>
        ) : null}
      </div>
      <input
        {...field}
        {...props}
        type={
          props.type == "password"
            ? showPass
              ? "text"
              : "password"
            : props.type
        }
        className={`w-full rounded-[10px] border bg-white 
    p-4 font-body placeholder-gray-300 focus:outline-none focus:ring-1
    ${
      meta.error && meta.touched
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-200 focus:ring-green-500"
    } ${props.type == "color" ? "h-[50px] max-w-[50px] p-2" : ""}`}
      />
      {infoMessage && (meta.touched ? !meta.error : !meta.touched) && (
        <p className="flex gap-1 text-sm text-gray-200">
          <span>
            <Info size={16} weight="bold" className="-mt-[2px]" />
          </span>
          {infoMessage}
        </p>
      )}
      {meta.error && meta.touched && (
        <p className="flex gap-1 text-sm text-red-500">
          {/* <span>
            <Error size={16} className="-mt-[2px]" />
          </span> */}
          {meta.error}
        </p>
      )}
    </div>
  );
}
