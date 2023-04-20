import { faComments, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Card({ id, title, createdBy, category, time, upvotes, commentCount }) {
  return (
    <section id={id} className="card">
      <p>
        {category} - by {createdBy} @ {time}
      </p>
      <h2>{title}</h2>
      <p>
        <FontAwesomeIcon icon={faUpLong} />
        &nbsp;{upvotes} upvotes&nbsp;|&nbsp;
        <FontAwesomeIcon icon={faComments} />
        &nbsp;{commentCount} comments
      </p>
    </section>
  );
}

export default Card;
