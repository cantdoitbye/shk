import React from "react";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";

const ContactPage = () => {
  return (
    <div className="pt-20">
      <Contact data={JsonData.Contact} />
    </div>
  );
};

export default ContactPage;