"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const content = e.target[2].value;

    try {
      const res = await fetch("/api/auth/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          content,
        }),
      });
      res.status === 201 && alert("Message sent successfully");
      router.push("/?success=Message sent successfully");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

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
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <button className={styles.button}>Send Message</button>
          {error && "Something went wrong!"}
        </form>
      </div>
    </div>
  );
};

export default Contact;
