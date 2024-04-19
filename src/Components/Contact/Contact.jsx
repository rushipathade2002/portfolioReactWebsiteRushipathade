import React from 'react';
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8dce2617-feef-46b7-891a-c82f2e79eacf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get In touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let`s Talk </h1>
                    <p>I`m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>rushikeshpathade8698@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+91-8459214468</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Shivajinagar, Pune 411005</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder='Enter Your Name...' name="name" required/>
                    <label htmlFor=''>Your Email</label>
                    <input type="email" placeholder='Enter Your Email...' name="email" required/>
                    <label htmlFor=''>Write your message here</label>
                    <textarea rows="5" name="message" placeholder='Enter your message...' required></textarea>
                    <button type='submit' className="contact-submit">Submit</button>
                <span>{result}</span>
                </form>
            </div>
        </div>
    );
};

export default Contact;