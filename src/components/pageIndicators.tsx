import classNames from "classnames";
import { motion } from "framer-motion";
import { parentVariants, sections } from "./constants";
import { useGlobalStore } from "../context/global";

const childrenVariants = {
  show: {
    x: 0,
  },
  hide: {
    x: 50,
  },
};

export default function PageIndicators() {
  const { currentPage, setNextPage } = useGlobalStore();

  return (
    <motion.div
      variants={parentVariants}
      initial="hide"
      animate="show"
      className="absolute right-0 z-50 h-full flex flex-col"
    >
      <div role="navigation" className="my-auto space-y-6 px-4 md:px-9">
        {sections.map(({ url, name }) => (
          <motion.a
            variants={childrenVariants}
            onClick={() => setNextPage(url)}
            href={url}
            key={name}
            className={classNames(
              "bg-white block transition-all",
              {
                "w-3 h-10 rounded-lg":
                  name === "Home"
                    ? ["", "#home"].includes(currentPage)
                    : currentPage === url,
              },
              {
                "size-3 rounded-full opacity-70": currentPage !== url,
              }
            )}
            aria-label={`Navigate to ${name}`}
          ></motion.a>
        ))}
      </div>
    </motion.div>
  );
}
