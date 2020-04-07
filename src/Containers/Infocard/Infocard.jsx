import React from "react";
// import styles from "./Infocard.module.scss";

const Infocard = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>Contact List</h1>
      </center>
      {contacts.map((contact) => {
        return (
          <>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{contact.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
              <p class="card-text">{contact.company.catchPhrase}</p>
            </div>
          </div>
          </>
        );
      })}
    </div>
  );
};

export default Infocard;
