import React, {useState, useRef} from "react";
import emailjs from "@emailjs/browser"
function ContactForm() {
   // Declare state variables for the form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const resetForm = () => {
      setName("")
      setEmail("")
      setMessage("")
    }
    //Function to handle form submission
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_84e2ksi', 'template_zyrb2sl', form.current, 'boEzi5yckjup3pVoc')
        .then((result) => {
            console.log(result.text);
            console.log(name, email, message);
            console.log(form.current)
            resetForm()
            alert(` Hi ${name} your message was sent successfully`)
        }, (error) => {
            console.log(error.text);
        });
    };
  
      // Send the form data to the server or wherever it needs to go
      

  
    return (
      <div className="form-container" id="contact-me">
        <h2>Let's get in touch</h2>
      <form className="contact-form" ref={form} onSubmit={sendEmail} >
        <label className="contact-form__label">
          <input
            className="contact-form__input"
            placeholder="Name"
            type="text"
            value={name}
            name="name"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <br />
        <label className="contact-form__label">
          <input
            className="contact-form__input"
            placeholder="Email"
            type="email"
            value={email}
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label className="contact-form__label">
          <textarea
            className="contact-form__input contact-form__textarea"
            placeholder="Message"
            value={message}
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>
        <br />
        <button className="contact-form__button" type="submit" value="Send">Send</button>
      </form>
      </div>
    );
  }

export default ContactForm;