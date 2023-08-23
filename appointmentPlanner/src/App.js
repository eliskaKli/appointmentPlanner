import React, { useCallback, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    { name: "name", phoneNum: "phoneNum", email: "email" },
  ]);
  const [appoints, setAppoints] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phoneNum, email) => {
    setContacts((prev) => {
      return [...prev, { name: name, phoneNum: phoneNum, email: email }];
    });
  };

  const addAppointment = (title, contact, date, time) => {
    setAppoints((prev) => {
      return [
        ...prev,
        { title: title, contact: contact, date: date, time: time },
      ];
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appoints={appoints}
              addAppointment={addAppointment}
              contacts={contacts}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
