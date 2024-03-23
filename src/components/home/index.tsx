import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiArrowBack } from "react-icons/bi";
import hero from "../../assets/images/BMW-i5-eDrive40.png";
import { useGlobalStore } from "../../context/global";
import "../../styles/home.css";
import HeroDescription from "./description";

export default function Home() {
  const { currentPage, setNextPage } = useGlobalStore();

  return (
    <Transition
      as="section"
      unmount={false}
      show={!currentPage || currentPage === "#home"}
      appear={true}
      id="home"
      className="h-[100dvh] md:block flex flex-col overflow-hidden w-screen px-8 pt-32 md:px-24 md:pt-28 bg-home"
    >
      <div className="space-y-20">
        <Transition.Child
          unmount={false}
          enter="transform duration-500 ease-in-out opacity transition-all"
          enterFrom="-translate-y-[100px] opacity-0"
          enterTo="translate-y-0 opacity-1"
          leave="transform transition duration-500 ease-in-out"
          leaveFrom="translate-y-0 opacity-1"
          leaveTo="-translate-y-full opacity-0"
          as="section"
          className="flex flex-col font-bold"
          id="hero-text"
        >
          <h1>
            <div>BMW i5</div>
            <div className="-mt-8 text-slate-500">eDrive40</div>
          </h1>

          <a
            onClick={() => setNextPage("#features")}
            href="#features"
            className="flex items-center gap-4"
          >
            Explore <BiArrowBack size={50} />
          </a>
        </Transition.Child>

        <Transition.Child
          unmount={false}
          enter={`transform opacity transition-all duration-500 ease-in-out`}
          enterFrom="translate-x-[100px] opacity-0"
          enterTo="translate-x-0 opacity-1"
          leave="transform opacity transition-all duration-500 ease-in-out"
          leaveFrom="translate-x-0 opacity-0"
          leaveTo="translate-x-full opacity-1"
          as={Fragment}
        >
          <img
            className="md:absolute md:right-16 md:bottom-16"
            src={hero}
            alt="BMW i5 eDrive40"
          />
        </Transition.Child>
      </div>

      <HeroDescription />
    </Transition>
  );
}
