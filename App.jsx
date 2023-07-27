import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContacts";

//const dummyContacts = [
//  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
//];

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log("Contacts:", contacts);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
      } catch (error) {
        console.error("There was an error fetching contacts", error);
      }
    };
    fetchContacts();
  }, []);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList
          contacts={contacts}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
};

export default App;
