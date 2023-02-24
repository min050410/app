import classNames from "classnames";
import { HTMLProps, ReactNode, useState } from "react";
import KebabIcon from "../Icon/KebabIcon";

interface KebabProps {
  children?: ReactNode;
  className?: string;
}

interface KebabProviderProps extends HTMLProps<HTMLDivElement>, KebabProps {}
interface KebabMenuProps extends HTMLProps<HTMLUListElement>, KebabProps {}
interface KebabItemProps extends HTMLProps<HTMLLIElement>, KebabProps {}

function Provider({ children, className = "" }: KebabProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => setIsOpen((prev) => !prev);

  return (
    <div
      onClick={handleMenuClick}
      className={classNames("relative text-sm cursor-pointer", className)}
    >
      <KebabIcon className="hover:opacity-50 -z-10 relative" />
      {isOpen && children}
    </div>
  );
}

function Menu({ children, className = "" }: KebabMenuProps) {
  return (
    <ul
      className={classNames(
        "absolute top-6 right-0 shadow-sm shadow-[#00000040]",
        className,
      )}
    >
      {children}
    </ul>
  );
}

function Item({ children, className = "", onClick }: KebabItemProps) {
  return (
    <li
      className={classNames(
        "cursor-pointer px-2.5 py-[0.3125rem] hover:bg-slate-300",
        className,
      )}
    >
      <span className="flex items-center whitespace-nowrap" onClick={onClick}>
        {children}
      </span>
    </li>
  );
}

export default { Provider, Menu, Item };