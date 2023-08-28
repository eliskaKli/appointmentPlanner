import React from "react";

export const ContactForm = (
  props
  //{ 
  //name,
  // setName,
  // phoneNum,
  // setPhoneNum,
  // email,
  // setEmail,
  // handleSubmit
  //}
) => {

  const handleChangedName = (e) => props.setName(e.target.value);
  const handleChangedPhoneNum = (e) => props.setPhoneNum(e.target.value);
  const handleChangedEmail = (e) => props.setEmail(e.target.value);

  return (
    <>
    
    <form onSubmit={props.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={props.name}
            onChange={handleChangedName}
            defaultValue={"FirstName LastName"}
            required
          ></input>
        </label>
        <label>
          Phone number:
          <input
            type="number"
            value={props.phoneNum}
            onChange={handleChangedPhoneNum}
            pattern="^(\d{3}-\d{3}-\d{3})*$"
            required
          ></input>
        </label>
        <label>
          E-mail:
          <input
            type="text"
            value={props.email}
            onChange={handleChangedEmail}
            required
          ></input>
        </label>
        <button type="submit">
          Submit new contact
        </button>
      </form>
    </>
  );
};

