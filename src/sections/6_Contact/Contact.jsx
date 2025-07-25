// component
import ScrollTop from './components/features/ScrollTop'

// css
import './styles/Contact.css'

function Contact() {
    return (
        <section id='contact' className='contact'>
            {/* Start croll to top btn */}
            <ScrollTop />
            {/* End croll to top btn */}

            {/* Start contact */}
            <div className='contact__layout'>

                {/* Start tilte */}
                <h2 className="contact__title">聯繫我們</h2>
                {/* End tilte */}

                {/* Start form */}
                <form className="contact__form">
                    <input type="text" placeholder="姓名*：" required />
                    <input type="email" placeholder="聯絡信箱*：" required />
                    <textarea rows="7" placeholder="訊息內容*：" required />
                </form>
                {/* End form */}

                {/* Start submit btn */}
                <button className='contact__button contact__button--mobile' type="submit">確認</button>
                <button className='contact__button contact__button--desktop' type="submit">送出</button>
                {/* End submit btn */}
                
            </div>
            {/* End contact */}

        </section>
    )
}

export default Contact