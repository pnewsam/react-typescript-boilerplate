import React, { useState } from "react";
import { Input } from "@/components/ui/Input";

export const FormPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert("submit");
  };

  return (
    <main>
      <h1>Form Page</h1>
      <form action="">
        <label htmlFor="firstName">First Name</label>
        <Input
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName((e.target as HTMLInputElement).value);
          }}
        />

        <label htmlFor="lastName">Last Name</label>
        <Input
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName((e.target as HTMLInputElement).value);
          }}
        />

        <label htmlFor="email">Email</label>
        <Input
          name="email"
          value={email}
          onChange={(e) => {
            setEmail((e.target as HTMLInputElement).value);
          }}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </main>
  );
};
