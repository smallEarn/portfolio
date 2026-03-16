import "../styles/ContactPage.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_km0hwui",
      "template_axlw2tp",
      form.current,
      "F--lerGx9iTRrpB4_"
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset(); // ⭐ clears all inputs
      },
      (error) => {
        alert("Failed to send message.");
        console.log(error);
      }
    );
  };

  return (
    <section className="contactPage" id="contact">
      <div className="main__header">
        <h1 className="main__title">Contact</h1>
        <div className="main__underline"></div>
      </div>

      <p className="contactIntro">
        I’m currently open to freelance projects, full-time opportunities, and collaborations.
      </p>

      <div className="contactStatus">
        Available for new opportunities
      </div>

      <div className="contactFormCard">
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <div className="formRow">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          <input type="text" name="subject" placeholder="Subject" required />

          <textarea
            name="message"
            placeholder="Tell me about your project or opportunity"
            rows="7"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}