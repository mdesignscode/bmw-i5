import classNames from "classnames";
import { sections } from "./constants";
import { useGlobalStore } from "../context/global";
import { Transition } from "@headlessui/react";

export default function PageIndicators() {
  const { currentPage, setNextPage } = useGlobalStore();

  return (
    <Transition
      show={true}
      appear={true}
      enter={`transform opacity transition-all duration-500 ease-in-out`}
      enterFrom="translate-x-[100px] opacity-0"
      enterTo="translate-x-0 opacity-1"
      leave="transform opacity transition-all duration-500 ease-in-out"
      leaveFrom="translate-x-0 opacity-0"
      leaveTo="translate-x-full opacity-1"
      className="absolute right-0 z-50 h-full flex flex-col"
    >
      <div role="navigation" className="my-auto space-y-6 px-4 md:px-9">
        {sections.map(({ url, name }) => (
          <a
            onClick={() => setNextPage(url)}
            href={url}
            key={name}
            className={classNames(
              "bg-white block transition-all",
              {
                "w-3 h-10 rounded-lg":
                  name === "Home"
                    ? ["", "#home"].includes(currentPage)
                    : currentPage === url,
              },
              {
                "size-3 rounded-full opacity-70": currentPage !== url,
              }
            )}
            aria-label={`Navigate to ${name}`}
          ></a>
        ))}
      </div>
    </Transition>
  );
}
