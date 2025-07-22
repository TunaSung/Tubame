// component & icon
import Instagram from "./icons/Instagram"
import Facebook from "./icons/Facebook"
import Line from "./icons/Line"

// css
import './styles/Footer.css'

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__content">

                    {/* Start title */}
                    <h2 className="footer__thankyou">THANK YOU</h2>
                    {/* End title */}

                    {/* Start icons */}
                    <div className="footer__socials">
                        <a href="#!" className="footer__social">
                            <Facebook className="footer__icon footer__icon--facebook" />
                        </a>
                        <a href="#!" className="footer__social">
                            <Instagram className="footer__icon footer__icon--instagram" />
                        </a>
                        <a href="#!" className="footer__social">
                            <Line className="footer__icon footer__icon--line" />
                        </a>
                    </div>
                    {/* End icons */}
            </div>
        </footer>
    )
}

export default Footer