import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useGlobalStore } from "../context/global";
import overlay from "../assets/images/overlay.png";

const allImages = import.meta.glob(
        "/src/assets/images/gallery/*",
        { eager: true, import: "default" }
) as Record<string, string>;
const images = Object.values(allImages);

export default function Gallery() {
        const { currentPage } = useGlobalStore();
        const [currentSlide, setCurrentSlide] = useState(0);

        const goToPreviousSlide = () => {
                setCurrentSlide((prevSlide) =>
                        prevSlide === 0 ? images.length - 1 : prevSlide - 1
                );
        };

        const goToNextSlide = () => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        };

        return (
                <Transition
                        as="section"
                        id="gallery"
                        show={currentPage === "#gallery"}
                        className="h-[100dvh] relative"
                >
                        <div>
                                <img
                                        src={overlay}
                                        alt=""
                                        className="absolute z-10 top-0 left-0 w-full hidden lg:block"
                                />
                                <Transition.Child
                                        enter={`transition-all duration-1000 ease-in-out`}
                                        enterFrom="opacity-0 translate-y-full"
                                        enterTo="opacity-1 translate-y-0"
                                        leave="transform opacity transition-all duration-150 ease-in-out"
                                        leaveFrom="opacity-1 translate-y-0"
                                        leaveTo="opacity-0 translate-y-full"
                                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-8"
                                        unmount={false}
                                >
                                        <button
                                                onClick={goToPreviousSlide}
                                                className="transform -translate-y-1/2 bg-white bg-opacity-80 text-black px-4 py-2 rounded-full z-50"
                                        >
                                                Prev
                                        </button>
                                        <button
                                                onClick={goToNextSlide}
                                                className="transform -translate-y-1/2 bg-white bg-opacity-80 text-black px-4 py-2 rounded-full z-10"
                                        >
                                                Next
                                        </button>
                                </Transition.Child>
                                {images.map((imageUrl, index) => (
                                        <>
                                                <Transition
                                                        as="img"
                                                        show={index === currentSlide}
                                                        key={index}
                                                        src={imageUrl}
                                                        alt={`Slide ${index}`}
                                                        className={`w-3/4 left-1/2 rounded-lg hover:scale-105 -translate-x-1/2 z-10 aspect-video object-cover absolute top-1/2 -translate-y-1/2 lg:hidden transition-all duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                                                }`}
                                                        enter="transition-transform ease-in duration-500"
                                                        enterFrom="scale-95"
                                                        enterTo="scale-100"
                                                />

                                                <img
                                                        key={index}
                                                        src={imageUrl}
                                                        alt={`Slide ${index}`}
                                                        className={`w-full z-0 aspect-video object-cover absolute top-0 hidden lg:block left-0 transition-all duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                                                }`}
                                                />
                                        </>
                                ))}
                        </div>
                </Transition>
        );
}

