import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/pro.svg"
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Full Name" className={styles.input} />
          <input
            type="email"
            placeholder="Your email address"
            className={styles.input}
          />
          <textarea
            name="message"
            className={styles.textarea}
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
          ></textarea>
          <Button url="#" text="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
