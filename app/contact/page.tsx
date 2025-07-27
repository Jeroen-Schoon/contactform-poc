"use client";

import React from "react";
import { useState } from "react";
import FormField from "../components/FormField";

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /**
     * ^            => Start of the string
     * [^\s@]+      => One or more characters that are NOT whitespace (\s) or @
     * @            => The "@" symbol must be present
     * [^\s@]+      => One or more characters that are NOT whitespace or @ (the domain)
     * \.           => A dot "." to separate domain and top-level domain
     * [^\s@]+      => One or more characters that are NOT whitespace or @ (the top-level domain)
     * $            => End of the string
     */

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch(
        "https://ixmknes7znga4lhkzzw2nnlxui0ckdkd.lambda-url.eu-west-1.on.aws/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, message }),
        }
      );

      const data = await res.json();
      console.log("Server response:", data);

      // Reset form after succesful POST.
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main>
      <form className="flex justify-center flex-col p-6 space-y-4 bg-secondary text-primary border-2 border-primary rounded-md shadow-black shadow-2xl">
        <div className="flex flex-col justify-center items-center pb-4">
          <h1 className="text-2xl font-extrabold">Want us to contact you?</h1>
          <h2 className="text-1xl">
            Fill in and submit this form so we can reach you!
          </h2>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4">
          <FormField
            className="flex flex-col"
            name="first"
            label="First name"
            placeholder="..."
            required={true}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormField
            className="flex flex-col"
            name="last"
            label="Last name"
            placeholder="..."
            required={true}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <FormField
            className="flex flex-col"
            name="email"
            type="email"
            placeholder="..."
            label="Email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField
            className="flex flex-col"
            isTextArea={true}
            label="Your message"
            name="message"
            placeholder="message..."
            rows={6}
            required={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="border-2 border-primary rounded-md p-2 bg-tertiary text-secondary hover:bg-primary focus:border-accent"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
