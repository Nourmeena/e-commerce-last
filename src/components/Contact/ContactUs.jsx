import React from "react";
import "./ContactUs.css";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="breadcrumb">
        <span>Home </span> / <span>Contact </span>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-section">
            <h3>
              {" "}
              <img
                src={phone}
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  margin: "6px",
                }}
              ></img>
              Call To Us
            </h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p className="contact-detail">Phone: +880611112222</p>
          </div>

          <div className="contact-section">
            <h3>
              <img
                src={mail}
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  margin: "6px",
                }}
              />
              Write To US
            </h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className="contact-detail">Emails: customer@exclusive.com</p>
            <p className="contact-detail">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone *"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn m-5">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
