import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const handleChangedName = (e) => setName(e.target.value);
  const handleChangedPhoneNum = (e) => setPhoneNum(e.target.value);
  const handleChangedEmail = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
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
    </div>
  );
};
