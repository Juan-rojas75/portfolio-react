'use client'
import React, { useState } from "react";
// Botón
import Button from "../../components/button.jsx";
import NotificationCard from "../../components/NotificationCard.jsx";
// Translation
import { useTranslation } from 'react-i18next';
// Utils
import { sendEmail } from "../../util/send-mail.util.js";

const Contact = () => {
  const { t } = useTranslation();

  const [showAlert, setShowAlert] = useState(false);
  let type = "success";
  let message = "Message sent successfully!";
  const sendEmailForm = async (e) => {
    e.preventDefault();
    
    const formData = {
      subject: e.target.subject.value,
      to_name: e.target.name.value,
      from_name: e.target.name.value,
      reply_to: e.target.email.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    
    console.log(formData);
    
    const result = await sendEmail(formData);
  
    setShowAlert(true);

    if (result.success) {
      type = "success";
      message = "Message sent successfully!";
    } else {
      type = "error";
      message = "Message not sent!";
      
    }
  
    e.target.reset();
  };

  return (
    <div>
      <section className="flex flex-col justify-center items-center flex-wrap w-full gap-10 text-black dark:text-white">
        <div className="flex flex-col justify-center gap-6 max-w-2xl">
          <span className="font-rubik font-bold text-4xl">{t('title_contact_me')}</span>
          <p className="font-rubik text-xl">
            {t('description_contact_me')}
          </p>
        </div>
        <section className="flex flex-row w-full justify-center">
          <form
            onSubmit={sendEmailForm}
            className="flex flex-col gap-3 rounded-md shadow-md border border-white max-w-fit px-4 py-2"
          >
            <div className="justify-center items-start">
              <h1 className="font-rubik font-bold text-lg">{t('title_form_contact')}</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-3 justify-between max-h-96">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 items-start">
                  <h1 className="font-rubik text-lg text-gray-700 dark:text-gray-50">{t('name_form_contact')}</h1>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t('placeholder_name')}
                    className="font-rubik px-2 py-1 rounded-md outline-none max-w-64 border border-gray-300 dark:text-black"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <h1 className="font-rubik text-lg text-gray-700 dark:text-gray-50">{t('email_form_contact')}</h1>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t('placeholder_email')}
                    className="font-rubik px-2 py-1 rounded-md outline-none max-w-64 border border-gray-300 dark:text-black"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <h1 className="font-rubik text-lg text-gray-700 dark:text-gray-50">{t('subject_form_contact')}</h1>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder={t('placeholder_subject')}
                    className="font-rubik px-2 py-1 rounded-md outline-none max-w-64 border border-gray-300 dark:text-black"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="font-rubik text-lg text-gray-700 dark:text-gray-50">{t('message_form_contact')}</h1>
                <textarea
                  id="message" 
                  name="message"
                  rows="4"
                  cols="50"
                  placeholder={t('placeholder_message')}
                  className="font-rubik px-2 py-1 outline-none max-w-56 resize-none max-h-60 border border-gray-300 rounded-md dark:text-black"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <Button text={t('button_form_contact')} type="submit" />
            </div>
          </form>
        </section>
      </section>
      {showAlert && (
        <NotificationCard
          type={type}
          message={message}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}

export default Contact;
