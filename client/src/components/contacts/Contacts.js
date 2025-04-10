import React from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import { useContext } from "react";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
