import { faComments, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Card({ id, title, createdBy, category, time, upvotes, commentCount }) {
  return (
    <section id={id} className="card">
      <p className="text-secondary">
        <b className="text-normal">{category}</b> - by {createdBy} @ {time}
      </p>
      <h2>{title}</h2>
      <p className="text-secondary">
        <FontAwesomeIcon className="icon-s" icon={faUpLong} />
        &nbsp;{upvotes} upvotes&nbsp;|&nbsp;
        <FontAwesomeIcon className="icon-s" icon={faComments} />
        &nbsp;{commentCount} comments
      </p>
    </section>
  );
}

export default Card;
