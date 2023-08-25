import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      props.addContact(name, phoneNum, email);
      setName("");
      setPhoneNum("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (props.contacts.some((obj) => obj.name === name)) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
      props.addContact(name, phoneNum, email);
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum}
          email={email}
          setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} />
      </section>
    </div>
  );
};
