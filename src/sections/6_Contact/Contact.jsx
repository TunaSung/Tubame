// hook
import { useState } from "react";

// component
import ScrollTop from "./components/features/ScrollTop";

// css
import "./styles/Contact.css";

function Contact() {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Input change handlers
  const toggleName = (e) => setName(e.target.value);
  const toggleEmail = (e) => setEmail(e.target.value);
  const toggleMsg = (e) => setMsg(e.target.value);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    //
  };

  return (
    <section id="contact" className="contact">
      {/* Start croll to top btn */}
      <ScrollTop />
      {/* End croll to top btn */}

      {/* Start contact */}
      <div className="contact__layout">
        {/* Start tilte */}
        <h2 className="contact__title">聯繫我們</h2>
        {/* End tilte */}

        {/* Start form */}
        <form onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            value={name}
            onChange={toggleName}
            placeholder="姓名*："
            required
            aria-label="姓名"
          />
          <input
            type="email"
            value={email}
            onChange={toggleEmail}
            placeholder="聯絡信箱*："
            required
            aria-label="聯絡信箱"
          />
          <textarea
            rows="7"
            value={msg}
            onChange={toggleMsg}
            placeholder="訊息內容*："
            required
            aria-label="訊息內容"
          />
          {/* Start submit btn */}
          <button
            className="contact__button contact__button--mobile"
            type="submit"
          >
            確認
          </button>
          <button
            className="contact__button contact__button--desktop"
            type="submit"
          >
            送出
          </button>
          {/* End submit btn */}
        </form>
        {/* End form */}
      </div>
      {/* End contact */}
    </section>
  );
}

export default Contact;
