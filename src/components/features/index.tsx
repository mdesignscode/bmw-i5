import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";
import feature1 from "../../assets/images/feature1.avif";
import feature2 from "../../assets/images/feature2.avif";
import feature3 from "../../assets/images/feature3.avif";
import feature4 from "../../assets/images/feature4.avif";
import { useGlobalStore } from "../../context/global";
import "../../styles/features.css";

const features = [
  {
    name: "Stunning sound design.",
    text: "Amplify the energy of any moment with the Harman Kardon Premium Sound System, standard on the i5 eDrive40 and i5 xDrive40. This 12-speaker and 205-watt system immerses you and your passengers in a rich symphony of sound.",
    image: feature1,
  },
  {
    name: "Your lounge awaits.",
    text: "The available Luxury Seating Package includes Front Ventilated and Heated Multi-Function Seats and Rear Heated Seats – for comfort that rivals any high-class lounge.",
    image: feature4,
  },
  {
    name: "Every detail, perfected. ",
    text: "Luxury isn't just seen, it's felt. The available Glass Controls – on the iDrive controller, Start/Stop button, and rocker switch for gear selection – add a luxurious, exquisite touch to the cabin.",
    image: feature2,
  },
  {
    name: "Brilliant interactions. ",
    text: " The standard glass BMW Interaction Bar with Ambient Lighting reacts to your touch and casts soft and soothing light throughout the cabin.",
    image: feature3,
  },
];

export default function Features() {
  const { currentPage } = useGlobalStore(),
    [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Transition
        appear={true}
        show={currentPage === "#features"}
        id="features"
      >
        {features.map((feature, i) => (
          <FeatureSlide
            key={feature.name}
            slideIndex={currentSlide}
            feature={feature}
            index={i}
          />
        ))}

        <Transition.Child
          enter={`transform opacity transition-all duration-500 ease-in-out`}
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-1"
          leave="transform opacity transition-all duration-500 ease-in-out"
          leaveFrom="translate-y-0 opacity-1"
          leaveTo="translate-y-full opacity-0"
          className="absolute bottom-32 left-24 flex gap-4"
        >
          {features.map((_, i) => (
            <button
              key={i}
              className={classNames(
                "focus:outline-white w-12 h-12 border-2 font-bold cursor-none hover:text-white duration-700 hover:bg-transparent hover:border-transparent transition-all rounded-full p-4 text-2xl grid place-content-center",
                {
                  "bg-white text-black": currentSlide === i,
                },
                {
                  "border-white bg-transparent": currentSlide !== i,
                }
              )}
              onClick={() => setCurrentSlide(i)}
            >
              {i + 1}
            </button>
          ))}
        </Transition.Child>
      </Transition>
    </>
  );
}

function FeatureSlide({
  feature: { image, text, name },
  index,
  slideIndex,
}: {
  feature: (typeof features)[0];
  index: number;
  slideIndex: number;
}) {
  return (
    <Transition
      appear={true}
      show={index === slideIndex}
      className="h-[100dvh] text-white grid grid-cols-2 items-center px-8"
    >
      <Transition.Child
        enter={`transform opacity transition-all duration-500 ease-in-out`}
        enterFrom="-translate-x-[100px] opacity-0"
        enterTo="translate-x-0 opacity-1"
        leave="transform opacity transition-all duration-500 ease-in-out"
        leaveFrom="translate-x-0 opacity-0"
        leaveTo="-translate-x-full opacity-1"
        className="px-16 flex flex-col h-1/2"
      >
        <div>
          <h1 className="text-5xl font-passionOneBlack font-bold mb-4">
            {name}
          </h1>
          <p className="text-xl">{text}</p>
        </div>
      </Transition.Child>

      <Transition.Child
        enter={`transform opacity transition-all duration-500 ease-in-out`}
        enterFrom="translate-x-[100px] opacity-0"
        enterTo="translate-x-0 opacity-1"
        leave="transform opacity transition-all duration-500 ease-in-out"
        leaveFrom="translate-x-0 opacity-0"
        leaveTo="translate-x-full opacity-1"
        className="m-16 overflow-hidden cursor-none"
      >
        <img
          src={image}
          alt=""
          className="transition-all rounded-xl hover:scale-105"
        />
      </Transition.Child>
    </Transition>
  );
}
