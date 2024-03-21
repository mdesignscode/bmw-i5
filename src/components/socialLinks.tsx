import { Transition } from "@headlessui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <Transition
      show={true}
      appear={true}
      enter={`transform opacity transition-all duration-500 ease-in-out`}
      enterFrom="translate-y-[100px] opacity-0"
      enterTo="translate-y-0 opacity-1"
      leave="transform opacity transition-all duration-500 ease-in-out"
      leaveFrom="translate-y-0 opacity-0"
      leaveTo="translate-y-full opacity-1"
      className="absolute left-6 bottom-8 grid gap-4"
    >
      <a
        target="_blank"
        href="https://web.facebook.com/BMW"
        aria-label="Visit us on Facebook"
      >
        <FaFacebook size={32} />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/bmw/"
        aria-label="Visit us on Instagram"
      >
        <FaInstagram size={32} />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/BMW"
        aria-label="Visit us on Instagram"
      >
        <FaTwitter size={32} />
      </a>
    </Transition>
  );
}
