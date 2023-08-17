import Color from "color";
import classNames from "classnames";
import { SquareButton } from "../Buttons";
import { Pencil, Trash } from "@phosphor-icons/react";
import { PopupLoader } from "../Loaders";
import { Confirmation, Modal } from "../Modals";
import { SchoolForm } from "../Forms";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Floor({
  schoolData = {},
  color = "#ba2222",
  mutate = () => {},
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const floorColor = Color(color);

  async function deleteItem() {
    try {
      setIsDeleting(true);
      setIsConfirmationOpen(false);
      const res = await fetch(
        `/api/employees/${schoolData?.employee}/schools/${schoolData?._id}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();

      if (result?.success) {
        toast.success("School deleted");
        mutate();
      } else if (!result?.success) {
        toast.error("Delete failed");
      }
      setIsDeleting(false);
    } catch (error) {
      setIsDeleting(false);
      toast.error("Delete failed");
    }
  }

  return (
    <div className="relative w-[400px] group flex-shrink-0 cursor-pointer">
      <div onClick={(e) => e.stopPropagation()}>
        <PopupLoader isOpen={isDeleting} message="Deleting school" />
        <Confirmation
          isOpen={isConfirmationOpen}
          label="Delete School?"
          onCancel={() => {
            setIsConfirmationOpen(false);
          }}
          onConfirm={deleteItem}
        />
        <Modal
          label="Edit School"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <SchoolForm
            initialData={schoolData}
            employeeId={schoolData?.employee}
            onCancel={() => setIsModalOpen(false)}
            onAfterSubmit={() => {
              setIsModalOpen(false);
              mutate();
            }}
          />
        </Modal>
      </div>
      <div
        className="absolute top-[25%] left-[50%] translate-x-[-50%] flex-col
      translate-y-[-50%] w-[75%] flex items-center justify-center gap-1"
      >
        <div className={classNames("w-full flex items-center justify-center")}>
          <p
            className={classNames(
              "capitalize drop-shadow-md font-display font-bold text-center leading-none",
              {
                "text-white": floorColor.isDark(),
                "text-black": floorColor.isLight(),
              }
            )}
          >
            {schoolData?.name}
          </p>
        </div>
        <p
          className={classNames(
            "capitalize drop-shadow-md font-display text-center text-xs",
            {
              "text-white": floorColor.isDark(),
              "text-black": floorColor.isLight(),
            }
          )}
        >
          {schoolData?.course}
        </p>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex-col gap-2 absolute right-[-35px] top-[50%] translate-y-[-50%] hidden group-hover:flex"
      >
        <SquareButton
          withBorder
          icon={<Pencil size={24} className="text-green-500" weight="fill" />}
          onClick={() => setIsModalOpen(true)}
        />
        <SquareButton
          withBorder
          icon={<Trash size={24} className="text-red-500" weight="fill" />}
          onClick={() => setIsConfirmationOpen(true)}
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        //   width="555.3"
        //   height="281.091"
        version="1.1"
        viewBox="0 0 146.923 74.372"
      >
        <g transform="translate(-188.235 -92.97)">
          <g
            strokeDasharray="none"
            strokeLinecap="round"
            strokeMiterlimit="4"
            transform="translate(126.23 89.347)"
          >
            <path
              fill={floorColor.hex()}
              d="M67.772 7.612H203.161V77.99499999999999H67.772z"
            ></path>
            <rect
              width="146.923"
              height="3.969"
              x="62.005"
              y="3.623"
              fill={floorColor.darken(0.3).string()}
              stroke="#000"
              strokeWidth="0"
              rx="2.646"
              ry="2.646"
            ></rect>
            <path
              fill="#00d6ff"
              fillOpacity="1"
              stroke={floorColor.darken(0.5).string()}
              strokeOpacity="1"
              strokeWidth="1.323"
              d="M75.881 37.663H195.053V70.71199999999999H75.881z"
            ></path>
            <path
              fill={floorColor.darken(0.5).string()}
              fillOpacity="1"
              stroke="#6eb93a"
              strokeOpacity="0.639"
              strokeWidth="0"
              d="M134.805 38.172H136.12800000000001V70.553H134.805z"
            ></path>
            <path
              fill={floorColor.darken(0.5).string()}
              fillOpacity="1"
              stroke="#6eb93a"
              strokeOpacity="0.639"
              strokeWidth="0"
              d="M164.849 38.172H166.172V70.553H164.849z"
            ></path>
            <path
              fill={floorColor.darken(0.5).string()}
              fillOpacity="1"
              stroke="#6eb93a"
              strokeOpacity="0.639"
              strokeWidth="0"
              d="M104.094 37.838H105.41699999999999V70.219H104.094z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}
