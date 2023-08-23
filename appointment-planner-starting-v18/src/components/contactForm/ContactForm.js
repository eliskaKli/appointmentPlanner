import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleChangedName = (e) => setName(e.target.value);
  const handleChangedPhoneNum = (e) => setPhoneNum(e.target.value);
  const handleChangedEmail = (e) => setEmail(e.target.value);

  return (
    <>
    
    <form onSubmit={handleSubmit}>
        <h2>Add Contact</h2>
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
            type="number"
            value={phoneNum}
            onChange={handleChangedPhoneNum}
            required
          ></input>
        </label>
        <label>
          email:
          <input
            type="text"
            value={email}
            onChange={handleChangedEmail}
            required
          ></input>
        </label>
        <button type="submit">
          Submit new contact
        </button>
      </form>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </>
  );
};

