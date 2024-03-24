import { useGlobalStore } from "../context/global";
import { parentVariants, sections } from "./constants";
import { motion } from "framer-motion";
import classNames from "classnames";
import "../styles/nav.css";

const childrenVariants = {
  show: {
    y: 0,
  },
  hide: {
    y: -50,
  },
};

export default function Navbar() {
  const { setNextPage, currentPage } = useGlobalStore();

  return (
    <motion.nav
      variants={parentVariants}
      initial="hide"
      animate="show"
      className="absolute top-4 flex justify-center w-full gap-4 text-sm md:text-xl uppercase tracking-widest font-poppinsBold z-50"
    >
      {sections.map(({ name, url }) => (
        <motion.a
          variants={childrenVariants}
          className={classNames("transition-all nav-link", {
            active:
              name === "Home"
                ? ["", "#home"].includes(currentPage)
                : currentPage === url,
          })}
          onClick={() => setNextPage(url)}
          key={name}
          href={url}
        >
          {name}
        </motion.a>
      ))}
    </motion.nav>
  );
}
