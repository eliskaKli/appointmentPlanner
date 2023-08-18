import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New contact is submitting :)");
    /*
    Add contact info and clear data  
    */
  };

  return (
    <div>
      <section type="submit" onSubmit={handleSubmit}>
        <h2>Add Appointment</h2>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} required />
        </label>
        <label>
          Contact:
          <input type="text" value={contact} onChange={handleContactChange} required />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} required />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={handleTimeChange} required />
        </label>
        <button type="submit">Submit new appointment</button>
      </section>
      <hr />

      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
