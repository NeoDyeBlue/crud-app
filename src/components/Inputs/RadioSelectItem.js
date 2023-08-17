import { useField } from "formik";
import { Circle, RadioButton } from "@phosphor-icons/react";

export default function RadioSelectItem({ children, long, checked, ...props }) {
  const [field, meta] = useField(props);
  return (
    <label className={`flex gap-4 ${long ? "items-start" : ""} cursor-pointer`}>
      <input
        type="radio"
        className="hidden"
        {...field}
        {...props}
        checked={checked}
      />
      <div className={`relative ${long ? "mt-1" : ""}`}>
        <span
          className={`text-gray-300 ${
            checked ? "opacity-0" : ""
          } transition-opacity`}
        >
          <Circle weight="bold" size={24} />
        </span>
        <span
          className={`absolute top-0 left-0 z-10 text-green-500 opacity-0 ${
            checked ? "opacity-100" : ""
          } transition-opacity`}
        >
          <RadioButton weight="fill" size={24} />
        </span>
      </div>
      {children}
    </label>
  );
}
