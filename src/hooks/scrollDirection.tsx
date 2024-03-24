import { useEffect, useState } from "react";
import { sections } from "../components/constants";
import { useGlobalStore } from "../context/global";

export default function useScrollDirection() {
  const { setNextPage } = useGlobalStore(),
    [nextSection, setNextSection] = useState(location.hash),
    // scrolling on touch screen
    [touchScrollState, setTouchScrollState] = useState<{
      state: "default" | "scrolling" | "scrolled";
      startY: number;
      endY: number;
    }>({
      state: "default",
      startY: 0,
      endY: 0,
    });

  // handle scroll on touch screen
  useEffect(() => {
    if (touchScrollState.state === "scrolled") {
      // did not scroll
      if (touchScrollState.startY === touchScrollState.endY) return;

      // get current page
      let currentPageIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        if (sections[i].url === location.hash) {
          currentPageIndex = i;
          break;
        }
      }

      // determine the scrolled direction
      if (touchScrollState.startY > touchScrollState.endY) {
        // scroll down
        setNextSection(
          sections[
            currentPageIndex === sections.length - 1 ? 0 : currentPageIndex + 1
          ].url
        );
      } else {
        setNextSection(
          sections[
            !currentPageIndex ? sections.length - 1 : currentPageIndex - 1
          ].url
        );
      }

      // reset scroll state
      setTouchScrollState({
        state: "default",
        endY: 0,
        startY: 0,
      });
    }
  }, [touchScrollState]);

  // add event handlers
  useEffect(() => {
    // get scrollable element
    const container = document.getElementById("container");

    if (!container) throw new Error("Scroll container not found");

    const handleTouchEnd = (event: TouchEvent) => {
      setTouchScrollState((state) => ({
        state: "scrolled",
        startY: state.startY,
        endY: event.changedTouches[0].clientY,
      }));
    };

    const handleTouchStart = (event: TouchEvent) => {
      setTouchScrollState({
        state: "scrolling",
        startY: event.touches[0].clientY,
        endY: 0,
      });
    };

    container.addEventListener("touchend", (e) => handleTouchEnd(e));
    container.addEventListener("touchstart", (e) => handleTouchStart(e));

    return () => {
      container.removeEventListener("touchend", (e) => handleTouchEnd(e));
      container.removeEventListener("touchstart", (e) => handleTouchStart(e));
    };
  }, []);

  // update page after scroll
  useEffect(() => {
    location.hash = nextSection;
    setNextPage(nextSection);
  }, [nextSection, setNextPage]);

  // handle scroll on desktop
  useEffect(() => {
    // get scrollable element
    const container = document.getElementById("container");

    if (!container) throw new Error("Scroll container not found");

    const handleScroll = (e: WheelEvent) => {
      // get current page
      let currentPageIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        if (sections[i].url === location.hash) {
          currentPageIndex = i;
          break;
        }
      }

      // determine next page
      const nextPage =
        e.deltaY > 0
          ? sections[currentPageIndex + 1]?.url
          : sections[currentPageIndex - 1]?.url;

      // first or last page
      if (!nextPage) return;

      setNextSection(nextPage);
    };

    container.addEventListener("wheel", (e) => handleScroll(e));
    return () => {
      container.removeEventListener("wheel", (e) => handleScroll(e));
    };
  }, [setNextPage]);
}
