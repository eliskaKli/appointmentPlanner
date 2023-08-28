import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts, 
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

  return (
    <>
      <form type="submit" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <ContactPicker contacts={contacts}
          onChange={handleContactChange}/>
        </label>
        <label>
          Date:
          <input
            type="date"
            min={getTodayString()}
            value={date}
            onChange={handleDateChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            required
          />
        </label>
        <button type="submit">Submit new appointment</button>
      </form>
    </>
  );
};
