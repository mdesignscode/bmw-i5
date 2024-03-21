import { useEffect, useState } from "react";
import { sections } from "../components/constants";
import { useGlobalStore } from "../context/global";

export default function useScrollDirection() {
  const { setNextPage } = useGlobalStore(),
  [nextSection, setNextSection] = useState(location.hash)

  useEffect(() => {
      location.hash = nextSection;
      setNextPage(nextSection)
    }, [nextSection, setNextPage]);

  useEffect(() => {
    const container = document.getElementById("container")

    if (!container) throw new Error();

    const handleScroll = (e: WheelEvent) => {
      let currentPageIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        if (sections[i].url === location.hash) {
          currentPageIndex = i;
          break;
        }
      }

      const nextPage =
        e.wheelDelta > 0
          ? sections[currentPageIndex - 1]?.url
          : sections[currentPageIndex + 1]?.url;

      if (!nextPage) return

      setNextSection(nextPage)
    };

    container.addEventListener("wheel", (e) => handleScroll(e));
    return () => {
      container.removeEventListener("wheel", (e) => handleScroll(e));
    };
  }, [setNextPage]);

  return nextSection;
}
