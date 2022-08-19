import React, { useRef } from "react";
import style from "../../styles/Form.module.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("farm1234", "farm1234", e.target, "TR3YWuLdrq9JfMV5X")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={style.Form}>
      <div className={style.Form_container}>
        <div className={style.title}>
          <h2>Have a question? We will call back!</h2>
        </div>
        <form className={style.form_input} ref={form} onSubmit={sendEmail}>
          <div className={style.torm_top}>
            <input type="text" placeholder="Your Name" name="name" />
            <input type="text" placeholder="Phone" name="phone" />
            <button>Send</button>
          </div>
          <div className={style.footer}>
            <div>
              *by clicking on the button, you agree to the privacy policy
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
