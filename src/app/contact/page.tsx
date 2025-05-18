'use client'

import { useEffect, useState } from "react"
import styles from "./Contact.module.scss"
import Heading from "../components/Heading/Heading";
import Button from "../components/Button/Button";
import Head from "next/head";

/**
 * Contact page that enables users to send messages using the appropriate API endpoint
 */
export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [form, setForm] = useState<{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    subject: string,
    message: string,
    source: string 
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    source: process.env.NEXT_PUBLIC_SOURCE || "next"
  });

  const handleSubmit = async () => {
    setStatus(null);
    setResult("Please wait...");
    
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      const text = await response.text();

      console.log(response.status, text);

      if (response) {
        setStatus("success");
        setResult("Thank you for reaching out!");
      } else {
        setStatus("error");
        setResult("An error has occurred!");
      }

      // Reset form after submission
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        source: process.env.NEXT_PUBLIC_SOURCE || "next"
      });
    } catch (error) {
      setStatus("error");
      setResult("An error has occurred!");
      console.error(error);
    }
  }

  useEffect(() => {
    if (typeof document !== 'undefined') document.title = 'Contact - Jezz Lucena';
  }, []);

  return (
    <>
      <Head>
        <title>Contact - Jezz Lucena</title>
      </Head>
      <div className={`${styles.content} relative bg-white`}>
        <div className="absolute -top-[60px]" id="content"></div>
        <div className="relative w-[100%] max-w-[768px] mx-auto py-[30px] px-[20px] md:px-[30px] lg:px-[50px]">
          <Heading>
            <span>Contact</span>
          </Heading>

          <form method="POST" onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}>
            <div className="flex gap-2">
              <div className={`${styles.field} grow`}>
                <label className={styles.required} htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  onChange={e => setForm({ ...form, firstName: e.target.value })}
                  value={form.firstName}
                  required
                />
              </div>
              <div className={`${styles.field} grow`}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={e => setForm({ ...form, lastName: e.target.value })}
                  value={form.lastName}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.required} htmlFor="email">Email</label>
              <input
                type="email" 
                name="email" 
                id="email"
                onChange={e => setForm({ ...form, email: e.target.value })}
                value={form.email}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                onChange={e => setForm({ ...form, phone: e.target.value })}
                value={form.phone}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={e => setForm({ ...form, subject: e.target.value })}
                value={form.subject}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.required} htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                onChange={e => setForm({ ...form, message: e.target.value })}
                value={form.message}
                required
              />
            </div>
            <div className="flex">
              <div className={`${styles.legend} grow`}>
                <div className={styles.required}>Required</div>
              </div>
              <div className={`${styles.buttonArea} grow`}>
                <Button>
                  <input type="submit" value="Send"/>
                </Button>
              </div>
            </div>
            {result && (
              <div className={`flex ${styles.result} ${status === 'success' ? styles.success : ""} ${status === 'error' ? styles.error : ""}`}>
                { result }
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}