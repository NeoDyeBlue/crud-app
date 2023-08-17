import classNames from "classnames";

export default function SquareButton({
  icon,
  withBorder = false,
  onClick = () => {},
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "flex aspect-square flex-shrink-0 items-center justify-center rounded-md p-1 leading-none bg-white hover:bg-gray-100",
        { "border-4 border-black": withBorder }
      )}
    >
      {icon}
    </button>
  );
}
