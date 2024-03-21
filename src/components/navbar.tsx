import { useContext } from "react";
import { GlobalContext } from "../context/global";
import { sections } from "./constants";
import { Transition } from "@headlessui/react";
import classNames from "classnames";
import "../styles/nav.css";

export default function Navbar() {
  const { setCurrentPage, currentPage } = useContext(GlobalContext);

  return (
    <Transition
      as="nav"
      show={true}
      appear={true}
      enter={`transform opacity transition-all duration-500 ease-in-out`}
      enterFrom="-translate-y-full opacity-0"
      enterTo="translate-y-0 opacity-1"
      leave="transform opacity transition-all duration-500 ease-in-out"
      leaveFrom="translate-y-0 opacity-0"
      leaveTo="-translate-y-full opacity-1"
      className="absolute top-4 flex justify-center w-full gap-4 text-xl uppercase tracking-widest font-poppinsBold"
    >
      {sections.map(({ name, url }) => (
        <a
          className={classNames(
            "transition-all nav-link",
            {
              "active": currentPage.name === url,
            }
          )}
          onClick={() => setCurrentPage({ name: url })}
          key={name}
          href={url}
        >
          {name}
        </a>
      ))}
    </Transition>
  );
}
