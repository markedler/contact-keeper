import React from "react";
import Contacts from "../components/contacts/Contacts";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="grid-2">
        <div>{/* Contact Form */}</div>
        <div>
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default Home;
