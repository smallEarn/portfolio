import "../styles/ContactPage.scss";

export default function ContactPage() {
  return (
    <div className="tab-content active" id="contact">
      <div className="main__header">
        <h1 className="main__title">Contact</h1>
        <div className="main__underline"></div>
      </div>

      <p className="contact-intro">
        I’m currently open to new opportunities. If you're an employer,
        recruiter, or collaborator and would like to discuss a project or role,
        feel free to reach out.
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <input type="text" placeholder="Subject" required />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}