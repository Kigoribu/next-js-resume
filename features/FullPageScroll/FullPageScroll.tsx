"use client";
import React, {
  useEffect,
  memo,
  useRef,
  useContext,
  Children,
  FC,
  ReactElement,
  cloneElement,
} from "react";
import { PageContext } from "./context/PageContext";
import { IFullPageBlockProps } from "./FullPageBlock";

interface IFullPageScrollProps {
  children: ReactElement<IFullPageBlockProps>[];
}

const FullPageScrollNotMemo: FC<IFullPageScrollProps> = ({ children }) => {
  const wellRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  const { setPageNum } = useContext(PageContext);

  useEffect(() => {
    let well = wellRef.current;
    let pnls = blocksRef.current.length;

    let swdir: string,
      sX: number,
      sY: number,
      dX,
      dY,
      threshold = 100,
      /*[min distance traveled to be considered swipe]*/
      slack = 200,
      /*[max distance allowed at the same time in perpendicular direction]*/
      alT = 1000,
      /*[max time allowed to travel that distance]*/
      elT /*[elapsed time]*/,
      stT: number; /*[start time]*/

    function handleScroll(e: WheelEvent) {
      if (e.deltaY < 0) {
        scdir = "down";
      }
      if (e.deltaY > 0) {
        scdir = "up";
      }
      e.stopPropagation();
    }

    let scdir: string,
      hold = false;

    function _scrollY(this: void, obj: HTMLDivElement) {
      let slength: number,
        plength,
        pan,
        step = 100,
        vh = window.innerHeight / 100,
        vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
      if (obj !== undefined && obj.id === "well") {
        pan = obj;
        plength = Math.floor(pan.offsetHeight / vh);
      }
      if (pan === undefined) {
        return;
      }
      plength = plength || Math.floor(pan.offsetHeight / vmin);
      slength = parseInt(pan.style.transform.replace("translateY(", ""));
      if (scdir === "up" && Math.abs(slength) < plength - plength / pnls) {
        slength = slength - step;
      } else if (scdir === "down" && slength < 0) {
        slength = slength + step;
      } else if (scdir === "top") {
        slength = 0;
      }
      if (hold === false) {
        hold = true;
        pan.style.transform = "translateY(" + slength + "svh)";
        setPageNum((prev) => {
          if (Math.abs(slength) / 100 > prev) {
            return prev + 1;
          } else if (Math.abs(slength) / 100 < prev) {
            return prev - 1;
          } else return prev;
        });
        setTimeout(function () {
          hold = false;
        }, 1000);
      }
    }

    function handleTouchStart(e: TouchEvent) {
      let tchs = e.changedTouches[0];
      swdir = "none";
      sX = tchs.pageX;
      sY = tchs.pageY;
      stT = new Date().getTime();
    }

    function handleTouchEnd(e: TouchEvent) {
      let tchs = e.changedTouches[0];
      dX = tchs.pageX - sX;
      dY = tchs.pageY - sY;
      elT = new Date().getTime() - stT;
      if (elT <= alT && well) {
        if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
          swdir = dX < 0 ? "left" : "right";
        } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
          swdir = dY < 0 ? "up" : "down";
        }
        if (well.id === "well") {
          if (swdir === "up") {
            scdir = swdir;
            _scrollY(well!);
          } else if (swdir === "down" && well.style.transform !== "translateY(0)") {
            scdir = swdir;
            _scrollY(well!);
          }
          e.stopPropagation();
        }
      }
    }

    if (well !== null) {
      well.style.transform = "translateY(0)";
      document.body.addEventListener("wheel", handleScroll);
      document.body.addEventListener("wheel", () => _scrollY(well!));

      document.body.addEventListener("touchstart", handleTouchStart, { passive: true });
      // document.body.addEventListener("touchmove", handleTouchMove, { passive: true });
      document.body.addEventListener("touchend", handleTouchEnd, { passive: true });

      let tops = document.querySelectorAll(".top");
      for (let i = 0; i < tops.length; i++) {
        tops[i].addEventListener("click", function () {
          scdir = "top";
          _scrollY(well!);
        });
      }
    }

    return () => {
      document.body.removeEventListener("wheel", handleScroll);
      document.body.removeEventListener("wheel", () => _scrollY(well!));

      document.body.removeEventListener("touchstart", handleTouchStart, true);
      // document.body.removeEventListener("touchmove", handleTouchMove, false);
      document.body.removeEventListener("touchend", handleTouchEnd, true);
    };
  }, []);

  return (
    <>
      {/* Удалить стили с корневого дива */}
      <div className="well" id="well" ref={wellRef}>
        {Children.map(children, (child, i) =>
          cloneElement(child, { ref: (el: HTMLDivElement) => (blocksRef.current[i] = el) })
        )}
      </div>
    </>
  );
};

export const FullPageScroll = memo(FullPageScrollNotMemo);
