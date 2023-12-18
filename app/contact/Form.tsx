"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as emailjs from "@emailjs/browser";
import Button from "@/components/Button";

// Add your emailjs configuration
const EMAILJS_PUBLIC_KEY = "jOdtogFBAAzKkhV3O";
const EMAILJS_SERVICE_ID = "portfolio_contact_1";
const EMAILJS_TEMPLATE_ID = "portfolio_message";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = async () => {
    if (isValid) {
      try {
        const form = document.getElementById("contact-form");
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form as HTMLFormElement,
          EMAILJS_PUBLIC_KEY
        );
        setSubscribed(true);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  if (subscribed) {
    return (
      <p className="mb-10 flex min-h-[15rem] flex-col items-center justify-center gap-4 rounded-lg text-white p-10 text-center">
        Message sent!
      </p>
    );
  } else {
    return (
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 flex flex-col items-center justify-center gap-4 rounded-lg border-[1px] bg-white p-10 text-center"
      >
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full gap-2">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg bg-gray-100 px-5 py-3"
              {...register("name", {
                required: `Name can't be left empty`,
              })}
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg bg-gray-100 px-5 py-3"
              {...register("email", {
                required: `Email can't be left empty`,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: `Email can't be only a number`,
                },
              })}
            />
          </div>

          <textarea
            rows={4}
            placeholder="Enter your message..."
            className="rounded-lg bg-gray-100 px-5 py-1 border-0"
            {...register("message", {
              required: `Message can't be left empty`,
            })}
          />
        </div>

        <Button
          type="submit"
          title="Send message"
          icon="/assets/mail.svg"
          variant="btn_dark_green"
        />

        {/* Render error messages */}

        {errors.name && (
          <p className="text-red-600">{errors.name.message?.toString()}</p>
        )}
        {errors.email && (
          <p className="text-red-600">{errors.email.message?.toString()}</p>
        )}
        {errors.message && (
          <p className="text-red-600">{errors.message.message?.toString()}</p>
        )}
      </form>
    );
  }
}
