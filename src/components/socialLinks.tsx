import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { parentVariants } from "./constants";

const childrenVariants = {
  show: {
    x: 0
  },
  hide: {
    x: -50
  }
}

export default function SocialLinks() {
  return (
    <motion.div
      variants={parentVariants}
      initial="hide"
      animate="show"
      className="absolute left-3 md:left-6 bottom-8 grid gap-4 z-50"
    >
      <motion.a
        variants={childrenVariants}
        target="_blank"
        href="https://web.facebook.com/BMW"
        aria-label="Visit us on Facebook"
      >
        <FaFacebook size={32} />
      </motion.a>
      <motion.a
        variants={childrenVariants}
        target="_blank"
        href="https://www.instagram.com/bmw/"
        aria-label="Visit us on Instagram"
      >
        <FaInstagram size={32} />
      </motion.a>
      <motion.a
        variants={childrenVariants}
        target="_blank"
        href="https://twitter.com/BMW"
        aria-label="Visit us on Instagram"
      >
        <FaTwitter size={32} />
      </motion.a>
    </motion.div>
  );
}
