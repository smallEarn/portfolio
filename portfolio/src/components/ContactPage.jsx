import "../styles/ContactPage.scss";

export default function ContactPage() {
  return (
    <section className="contactPage" id="contact">
      <div className="main__header">
        <h1 className="main__title">Contact</h1>
        <div className="main__underline"></div>
      </div>

      <p className="contactIntro">
        I’m currently open to freelance projects, full-time opportunities, and collaborations.
        If you have a project in mind or would like to discuss a role, feel free to send a message.
      </p>

      <div className="contactStatus">
        Available for new opportunities
      </div>

      <div className="contactFormCard">
        <form className="contactForm">
          <div className="formRow">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <input type="text" placeholder="Subject" required />

          <textarea
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