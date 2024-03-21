import { Fragment, useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import hero from "../../assets/images/BMW-i5-eDrive40.png";
import { GlobalContext } from "../../context/global";
import HeroDescription from "./description";
import { Transition } from "@headlessui/react";
import "../../styles/home.css";

export default function Home() {
  const { currentPage } = useContext(GlobalContext);

  return (
    <Transition
      as="section"
      show={currentPage.name === "#home"}
      appear={true}
      id="home"
      className="bg-home h-full w-full overflow-hidden px-20 pt-28"
    >
      <Transition.Child
        enter="transform duration-500 ease-in-out opacity transition-all"
        enterFrom="-translate-y-[100px] opacity-0"
        enterTo="translate-y-0 opacity-1"
        leave="transform transition duration-500 ease-in-out"
        leaveFrom="translate-y-0 opacity-1"
        leaveTo="-translate-y-full opacity-0"
        as="section"
        className="flex flex-col"
        id="hero-text"
      >
        <h1>
          <div>BMW i5</div>
          <div>eDrive-40</div>
        </h1>

        <a href="#home" className="flex items-center gap-4">
          Explore <BiArrowBack size={50} />
        </a>
      </Transition.Child>

      <HeroDescription />

      <Transition.Child
        enter={`transform opacity transition-all duration-500 ease-in-out`}
        enterFrom="translate-x-[100px] opacity-0"
        enterTo="translate-x-0 opacity-1"
        leave="transform opacity transition-all duration-500 ease-in-out"
        leaveFrom="translate-x-0 opacity-0"
        leaveTo="translate-x-full opacity-1"
        as={Fragment}
      >
        <img
          className="absolute right-8 bottom-16"
          src={hero}
          alt="BMW i5 eDrive40"
        />
      </Transition.Child>
    </Transition>
  );
}
