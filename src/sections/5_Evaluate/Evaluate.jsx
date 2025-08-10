// Library & hooks
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// component & icon & data
import CustomerCard from "./features/CustomerCard";
import { customerEvaluates } from "./features/CustomerData";
import { PiArrowRightLight, PiArrowLeftLight } from "react-icons/pi";

// css
import "./styles/Evaluate.css";

function Evaluate() {
  // State to control sliding direction
  const [isSlideRight, setIsSlideRight] = useState(false);

  // Calculated slide offset based on container and list width
  const [slideOffset, setSlideOffset] = useState(0);

  // Refs to DOM elements for measuring width
  const wrapperRef = useRef(null);
  const cardListRef = useRef(null);

  // Media query breakpoints
  const isBelow1440 = useMediaQuery({ maxWidth: 1439 });
  const isWidth480To640 = useMediaQuery({ minWidth: 480, maxWidth: 640 });
  const isWidth780To1440 = useMediaQuery({ minWidth: 780, maxWidth: 1440 });
  const isWidth1610To1920 = useMediaQuery({ minWidth: 1610, maxWidth: 1920 });
  const isWidthAbove2150 = useMediaQuery({ minWidth: 2150 });

  // Dynamically calculate slide offset when window resizes
  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };

    const handleResize = debounce(() => {
      if (wrapperRef.current && cardListRef.current) {
        const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
        const listWidth = cardListRef.current.getBoundingClientRect().width;
        const offset = listWidth - wrapperWidth * 0.99;
        setSlideOffset(-offset);
      }
    }, 100);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset slide state based on certain screen sizes
  useEffect(() => {
    if (
      isWidth480To640 ||
      isWidth780To1440 ||
      isWidth1610To1920 ||
      isWidthAbove2150
    ) {
      setIsSlideRight(false);
    }
  }, [isWidth480To640, isWidth780To1440, isWidth1610To1920, isWidthAbove2150]);

  return (
    <section id="evaluate" className="evaluate">
      <div className="evaluate__layout">
        {/* Start title */}
        <h3 className="evaluate__title">客戶好評</h3>
        {/* End title */}

        {/* Start evaluate card */}
        {isBelow1440 ? (
          // Mobile layout
          <motion.div
            className="evaluate__scroll-wrapper--mobile"
            ref={wrapperRef}
            initial={{ x: 0 }}
            animate={{ x: isSlideRight ? slideOffset : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div ref={cardListRef} className="evaluate__card-list">
              {customerEvaluates
                .filter((i) => i.index <= 3)
                .map((item) => (
                  <CustomerCard
                    key={item.index}
                    index={item.index}
                    avatarUrl={item.avatar}
                    name={item.name}
                    date={item.date}
                    hashtag={item.hashtag}
                    description={item.description}
                    imageUrl={item.img}
                  />
                ))}
            </div>
          </motion.div>
        ) : (
          // Desktop layout
          <motion.div
            className="evaluate__scroll-wrapper--desktop"
            ref={wrapperRef}
            initial={{ x: 0 }}
            animate={{ x: isSlideRight ? slideOffset : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div ref={cardListRef} className="evaluate__card-list">
              {customerEvaluates.map((item) => (
                <CustomerCard
                  key={item.index}
                  index={item.index}
                  avatarUrl={item.avatar}
                  name={item.name}
                  date={item.date}
                  hashtag={item.hashtag}
                  description={item.description}
                  imageUrl={item.img}
                />
              ))}
            </div>
          </motion.div>
        )}
        {/* End evaluate card */}

        {/* Start slide toggle button */}
        <button
          onClick={() => setIsSlideRight(!isSlideRight)}
          className="evaluate__hint"
          aria-label={
            isSlideRight
              ? "Scroll left to see more"
              : "Scroll right to see more"
          }
        >
          {isSlideRight ? (
            <>
              向左查看更多
              <PiArrowLeftLight
                className="evaluate__arrow"
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              向右查看更多
              <PiArrowRightLight
                className="evaluate__arrow"
                aria-hidden="true"
              />
            </>
          )}
        </button>
        {/* End slide toggle button */}
      </div>
    </section>
  );
}

export default Evaluate;
