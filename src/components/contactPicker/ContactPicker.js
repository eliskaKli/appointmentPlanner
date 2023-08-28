import React from "react";

export const ContactPicker = (props) => {
  return (
    <form>
      <label>Choose contact:</label>
      <select onChange={props.onChange} required>
        <option id="contactList" value="">No Contact Selected</option>
        {props.contacts.map((contact) => {
          return (
            <option value={contact.name} key={contact.id}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
