import React from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

const ContactPage = () => {
  return (
    <main>
      <form className="flex justify-center flex-col p-6 space-y-4 bg-secondary text-primary border-2 border-primary rounded-md shadow-black shadow-2xl">
        <div className="flex flex-col justify-center items-center pb-4">
          <h1 className="font-extrabold">Want us to contact you?</h1>
          <h2>Fill in and submit this form so we can reach you!</h2>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4">
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
          className="border-2 border-primary rounded-md p-2 bg-tertiary text-secondary hover:bg-primary focus:border-accent"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
