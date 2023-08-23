import React from "react";

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
      <section type="submit" onSubmit={handleSubmit}>
        <h2>Add Appointment</h2>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            value={contact}
            onChange={handleContactChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
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
      </section>
      <hr />

      <section>
        <h2>Appointments</h2>
      </section>
    </>
  );
};
