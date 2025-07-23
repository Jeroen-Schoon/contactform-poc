import React from "react";
import Input from "../components/input/page";
import TextArea from "../components/textarea/page";

const ContactPage = () => {
  return (
    <main>
      <form className="flex justify-center flex-col my-6 p-6 space-y-4 bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--accent)] shadow-black shadow-2xl">
        <div className="flex flex-col justify-center items-center pb-4">
          <h1 className="font-extrabold">Want us to contact you?</h1>
          <h2>Fill in and submit this form so we can reach you!</h2>
        </div>
        <div className="flex space-x-4">
          <Input
            className="flex flex-col"
            name="first"
            label="First name"
            placeholder="..."
            required={true}
          />
          <Input
            className="flex flex-col"
            name="last"
            label="Last name"
            placeholder="..."
            required={true}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <Input
            className="flex flex-col"
            name="email"
            type="email"
            placeholder="..."
            label="Email"
            required={true}
          />
          <TextArea
            className="flex flex-col"
            label="Your message"
            name="message"
            placeholder="message..."
            cols={24}
            rows={6}
            required={true}
          />
        </div>
        <button
          type="submit"
          className="border-2 p-2 bg-[var(--accent)] text-tertiary hover:bg-[var(--primary)] hover:text-[var(--accent)] focus:border-[var(--primary)]"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
