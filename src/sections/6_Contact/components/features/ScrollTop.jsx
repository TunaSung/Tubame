// icon
import ArrowTop from "../icons/ArrowTop";

// css
import "../../styles/ScrollTop.css";

function ScrollTop() {
  // sroll to top when click btn
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={ScrollToTop} className="top" aria-label="Scroll to top">
      <ArrowTop className="top__arrow" aria-hidden="true" />
      <p className="top__text">Top</p>
    </button>
  );
}

export default ScrollTop;
