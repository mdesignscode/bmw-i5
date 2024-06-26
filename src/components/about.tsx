import { useGlobalStore } from "../context/global";
import { Transition } from "@headlessui/react";

export default function AboutUs() {
  const { currentPage } = useGlobalStore();

  return (
    <Transition
      show={currentPage === "#about"}
      id="about"
      className="w-full h-[100dvh] flex bg-[url('/bmw-hq.webp')] [background-repeat:no-repeat] [background-position:center] [background-size:cover]"
      unmount={false}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-neutral-800 opacity-40" />
      <div className="relative z-10 h-full px-16 md:pt-36 flex flex-col md:w-3/4 justify-center mx-auto gap-6">
        <Transition.Child
          enter={`transition-all duration-1000 ease-in-out`}
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-1 translate-y-0"
          leave="transform opacity transition-all duration-150 ease-in-out"
          leaveFrom="opacity-1 translate-y-0"
          leaveTo="opacity-0 translate-y-full"
          className="text-3xl font-passionOneBlack font-bold uppercase text-right md:text-center"
          unmount={false}
        >
          Our story
        </Transition.Child>
        <Transition.Child
          enter={`transition-all duration-1000 ease-in-out`}
          enterFrom="opacity-0 translate-y-full"
          enterTo="opacity-1 translate-y-0"
          leave="transform opacity transition-all duration-150 ease-in-out"
          leaveFrom="opacity-1 translate-y-0"
          leaveTo="opacity-0 -translate-y-full"
          unmount={false}
          className="text-sm md:text-xl text-left md:text-center font-poppinsBold space-y-2"
        >
          <p>
            Welcome to BMW - where luxury, performance, and innovation converge
            to redefine the driving experience. Founded in 1916 as an aircraft
            engine manufacturer, BMW has since evolved into a global leader in
            luxury vehicles and motorcycles. At BMW, we are committed to pushing
            the boundaries of automotive excellence.
          </p>
          <p>
            Our diverse product range includes sedans, coupes, convertibles,
            SUVs, electric vehicles, and motorcycles, each meticulously crafted
            to embody our core values of quality, sophistication, and driving
            pleasure. With a rich history of innovation, BMW leads the way in
            automotive technology. From turbocharging to advanced driver
            assistance systems, our vehicles are engineered to deliver
            unparalleled performance, safety, and comfort.
          </p>
        </Transition.Child>
      </div>
    </Transition>
  );
}
