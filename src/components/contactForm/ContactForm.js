import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNum,
  setPhoneNum,
  email,
  setEmail,
  handleSubmit,
  alert
}) => {
  const handleChangedName = (e) => setName(e.target.value);
  const handleChangedPhoneNum = (e) => setPhoneNum(e.target.value);
  const handleChangedEmail = (e) => setEmail(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChangedName}
          defaultValue={"FirstName LastName"}
          required
        ></input>
      </label>
      <label>
        Phone number:
        <input
          type="tel"
          value={phoneNum}
          onChange={handleChangedPhoneNum}
          pattern="^(\d{3}-\d{3}-\d{3})*$"
          required
        ></input>
      </label>
      <label>
        E-mail:
        <input
          type="text"
          value={email}
          onChange={handleChangedEmail}
          required
        ></input>
      </label>
      <button type="submit">Submit new contact</button>
      <h2>{alert}</h2>
    </form>
  );
};
