import { Transition } from "@headlessui/react";
import { useGlobalStore } from "../context/global";

export default function AboutUs() {
  const { currentPage } = useGlobalStore();
  return (
    <Transition
      show={currentPage === "#about"}
      id="about"
      className="w-full h-[100dvh] flex bg-[url('/bmw-hq.webp')] [background-repeat:no-repeat] [background-size:cover]"
      appear={true}
      enter={`transition-all duration-1000 ease-in-out`}
      enterFrom="opacity-0 [background-position:center]"
      enterTo="opacity-1 [background-position:top]"
      leave="transform opacity transition-all duration-150 ease-in-out"
      leaveFrom="opacity-1 [background-position:top]"
      leaveTo="opacity-0 [background-position:center]"
      unmount={false}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-neutral-800 opacity-40" />
      <div className="relative z-10 text-center h-full px-16 pt-36 flex flex-col w-3/4 justify-center mx-auto gap-6">
        <Transition.Child
          unmount={false}
          as="h1"
          enter={`transition-all duration-1000 ease-in-out`}
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-1"
          leave="transform opacity transition-all duration-500 ease-in-out"
          leaveFrom="opacity-1 translate-y-0"
          leaveTo="-translate-y-full opacity-0"
          className="text-3xl font-passionOneBlack font-bold uppercase"
        >
          Our story
        </Transition.Child>
        <Transition.Child
          unmount={false}
          enter={`transition-all duration-1000 ease-in-out`}
          enterFrom="translate-y-[100px] opacity-0"
          enterTo="translate-y-0 opacity-1"
          leave="transition-all duration-500 ease-in-out"
          leaveFrom="opacity-1 translate-y-0"
          leaveTo="translate-y-full opacity-0"
          className="text-xl font-poppinsBold"
          as="p"
        >
          Welcome to BMW - where luxury, performance, and innovation converge to
          redefine the driving experience. Founded in 1916 as an aircraft engine
          manufacturer, BMW has since evolved into a global leader in luxury
          vehicles and motorcycles. At BMW, we are committed to pushing the
          boundaries of automotive excellence. Our diverse product range
          includes sedans, coupes, convertibles, SUVs, electric vehicles, and
          motorcycles, each meticulously crafted to embody our core values of
          quality, sophistication, and driving pleasure. With a rich history of
          innovation, BMW leads the way in automotive technology. From
          turbocharging to advanced driver assistance systems, our vehicles are
          engineered to deliver unparalleled performance, safety, and comfort.
        </Transition.Child>
      </div>
    </Transition>
  );
}
