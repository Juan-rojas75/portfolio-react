import React, { Component } from "react";
//boton
import Button from "../../components/button.jsx";

//Utils
import {sendEmail} from "../../util/send-mail.util.js";

export default class Contact extends Component {
  handleFirstButtonClick = () => {
    alert("Primera acción ejecutada!");
  };

  sendEmailForm = (e) => {
    e.preventDefault();
    const formData = {
      subject: e.target.subject.value,
      to_name: e.target.name.value,
      from_name: e.target.name.value,
      reply_to: e.target.email.value,
      email: e.target.email.value,
      message: e.target.message.value, // Cambié esto a 'message'
    };
    console.log(formData)
    sendEmail(formData);
  };

  render() {
    return (
      <div className="">
        <section className="flex flex-col flex-wrap w-full gap-10 mb-8">
          <div className="flex flex-col justify-center gap-6 w-full">
            <span className="font-rubik font-bold text-4xl">Get In Touch</span>
            <p className="font-rubik text-xl">
              I am here to help you with any questions, concerns, or projects
              you need my collaboration on. Do not hesitate to reach out to me
              through any of the means listed below. I would love to hear from
              you and discuss how I can help you achieve your goals.
            </p>
          </div>
          <section className="flex flex-row w-full justify-center">
            <form
              onSubmit={this.sendEmailForm} // Cambié 'action' por 'onSubmit'
              className="flex flex-col gap-3 rounded-md shadow-md border border-white max-w-fit px-4 py-2"
            >
              <div className="justify-center items-start">
                <h1 className="font-rubik font-bold text-lg">Whats up?</h1>
              </div>
              <div className="flex flex-row gap-3 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col items-start">
                    <h1 className="font-rubik text-lg">Name</h1>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="font-rubik px-2 py-1 rounded-md outline-none max-w-64"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h1 className="font-rubik text-lg">Email</h1>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="font-rubik px-2 py-1 rounded-md outline-none max-w-64"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h1 className="font-rubik text-lg">Subject</h1>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="font-rubik px-2 py-1 rounded-md outline-none max-w-64"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    {/* Añadí el 'type' como 'submit' */}
                    <Button text="Contact me" type="submit" />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col items-start">
                    <h1 className="font-rubik text-lg">Comment</h1>
                    <textarea
                      id="message" // Cambié el ID a 'message' para que coincida con 'sendEmail'
                      name="message" // Cambié el nombre a 'message'
                      rows="4"
                      cols="50"
                      className="font-rubik px-2 py-1 rounded-md outline-none max-w-56"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </section>
      </div>
    );
  }
}
