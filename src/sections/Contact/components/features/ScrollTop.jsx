// icon
import ArrowTop from "../icons/ArrowTop";

// css
import '../../styles/ScrollTop.css'

function ScrollTop() {
    
    // sroll to top when click btn
    const SrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <button onClick={SrollToTop} className="top">
            <ArrowTop className="top__arrow"/>
            <p className="top__text">Top</p>
        </button>
    )
}

export default ScrollTop