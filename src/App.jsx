import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList";

const [contacts, setContacts] = useState(dummyContacts);

export default function App() {
  const [count, setCount] = useState(0);
  console.log("Contacts: ", contacts);
  return (
    <>
      <ContactList />
    </>
  );
}
