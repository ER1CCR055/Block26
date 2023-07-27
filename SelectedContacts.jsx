import React, { useState, UseEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const fetchingSingleContact = async () => {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herkuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error("There was an error fetching a single contact", error);
      }
    };
    fetchingSingleContact();
  }, []);

  return (
    <div>
        {contact && (
            <div>
                <p>
                    <b>Name:</b> {contact.name}
                    </p>
                    <p>
                    <b>Phone</b> {contact.phone}
                    </p>
                    <div>
                    <b>Address:</b>
                    <p>
                    <b>Street:</b>
                    {contact.address.street}
                    <br />
                    <b>City/Zip:</b>
                    {contact.address.city}
                    {contact.address.zipcode}
                    </p>
                    </div>
                )}
                <button
                onClick={() => {
                    setSelectedContactId(null);
                }}
                >
                    Back
                    </button>
                </div>
);          
};

export default SelectedContact;
