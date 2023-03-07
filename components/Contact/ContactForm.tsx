"use client";

import SendIcon from "@/public/send.svg";

import styles from "./ContactForm.module.scss";
import { useState } from "react";

export function ContactForm() {
  const [confirmationMessage, setConfirmationMessage] = useState({
    isShown: false,
    isError: false,
    message: "",
  });

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { target } = e;

    // @ts-expect-error
    const username = target.username.value;
    // @ts-expect-error
    const email = target.usermail.value;
    // @ts-expect-error
    const message = target.message.value;

    const mailData = {
      service_id: "service_i4ebs0r",
      template_id: "template_wmyhdgf",
      user_id: "IWJcAAHnn7CLxFKbj",
      template_params: {
        user_name: username,
        user_email: email,
        message: message,
      },
    };

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const reqOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(mailData),
    };

    const req = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      reqOptions
    );

    if (!req.ok) {
      setConfirmationMessage((prevState) => ({
        ...prevState,
        isShown: true,
        isError: true,
        message: "Your mail failed to be sent, try again later",
      }));

      return;
    }

    return setConfirmationMessage((prevState) => ({
      ...prevState,
      isShown: true,
      message: "Your message has been sent successfully",
    }));
  };

  return (
    <form className={styles.form} onSubmit={(e) => sendForm(e)}>
      <label className={styles.label}>
        name
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="Jane doe"
          required
        />
      </label>
      <label className={styles.label}>
        email
        <input
          className={styles.input}
          type="email"
          name="usermail"
          placeholder="jane.doe@gmail.com"
          required
        />
      </label>

      <label className={styles.label}>
        message
        <textarea
          className={styles.input}
          name="message"
          placeholder="Your message here"
          required
        ></textarea>
      </label>

      <button
        className={styles.button}
        disabled={confirmationMessage.isShown && !confirmationMessage.isError}
      >
        <SendIcon className={styles.button__icon} />
        Contact me
      </button>

      {confirmationMessage.isShown && (
        <span
          className={`${styles.form__confirm} ${
            confirmationMessage.isError ? styles["form__confirm--errror"] : ""
          }`}
        >
          {confirmationMessage.message}
        </span>
      )}
    </form>
  );
}
