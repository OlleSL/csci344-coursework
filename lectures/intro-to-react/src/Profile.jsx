import "./Profile.css";
import React from "react";

export default function Profile({ name, picture }) {
  return (
    <section className="profile">
      <h3>{name}</h3>
      <img src={picture} alt={`Profile of ${name}`} width="100" />
    </section>
  );
}
