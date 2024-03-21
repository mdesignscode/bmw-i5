import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import classNames from "classnames";
import { Transition } from "@headlessui/react";

const descriptions = [
  {
    title: "Fully electric",
    text: "All-electric and all-exhilarating. This luxurious sedan offers incredible innovation and sophistication. Experience performance that captivates from start to finish. Energetic engineering, customizable drive modes, and all the torque you could ask for in a sleek midsize sedan.",
  },
  {
    title: "Electric Powertrain",
    text: "Introducing an all-electric vehicle featuring a 335-hp motor with 295 lb-ft of torque, paired with a Brake Energy Recuperation system. Equipped with an 84.3 kWh lithium-ion battery and advanced thermal management, it offers flexible charging options including J1772 AC and DC Fast charging capabilities.",
  },
  {
    title: "Safety Driving",
    text: "This vehicle features Variable Sport Steering for precise handling, Dynamic Stability Control (DSC) with Dynamic Traction Control (DTC) for enhanced stability, and 4-wheel disc brakes with ABS, DBC, and CBC for superior braking performance. Its Multi-link rear suspension ensures a comfortable ride, while Electric Power Steering provides effortless maneuverability.",
  },
];

export default function HeroDescription() {
  const [showDescription, setShowingDescription] = useState(
    descriptions.map(() => false)
  );

  return (
    <section className="absolute bottom-0 left-0 mx-24 flex items-end gap-4 overflow-y-hidden z-10">
      {descriptions.map(({ text, title }, i) => (
        <Transition.Child
          enter={`transform transition duration-500 ease-in-out}`}
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transform transition duration-500 ease-in-out"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
          as="section"
          key={i}
          className={classNames(
            "flex flex-col flex-1",
            { "text-black bg-white": !showDescription[i] },
            {
              "bg-gray-700 text-white": showDescription[i],
            }
          )}
        >
          <button
            className="flex justify-between items-center py-2 px-4"
            onClick={() =>
              setShowingDescription(
                showDescription.map((k, j) => (i === j ? !k : false))
              )
            }
          >
            {title}
            <span
              className={`transition ${showDescription[i] && "rotate-180"}`}
            >
              <BiChevronDown size={30} />
            </span>
          </button>
          <p
            className={classNames(
              "transition-all mr-8 px-4",
              { "h-0 invisible": !showDescription[i] },
              { "h-auto mb-2": showDescription[i] }
            )}
          >
            {text}
          </p>
        </Transition.Child>
      ))}
    </section>
  );
}
