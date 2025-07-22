import React from "react";
import Input from "../input/page";
import TextArea from "../textarea/page";

const Form = () => {
  return (
    <>
      <form className="mx-64 my-12 p-6 space-y-12 bg-[var(--secondary)] text-[var(--primary)] border-2">
        <div>
          <h1>Want us to contact you?</h1>
          <h2>Submit this form so we can reach you!</h2>
        </div>
        <Input
          name="first"
          label="First name"
          placeholder="First name"
          required={true}
        />
        <Input
          name="last"
          label="Last name"
          placeholder="Last name"
          required={true}
        />
        <Input
          name="email"
          type="email"
          placeholder="email"
          label="Email"
          required={true}
        />
        <TextArea
          label="Your message"
          name="message"
          placeholder="message..."
          rows={5}
          required={true}
        />
      </form>
    </>
  );
};

export default Form;
