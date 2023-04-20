import React from "react";
import Card from "./presentational/Card";

function CardList({ list }) {
  return (
    <>
      {list &&
        list.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            createdBy={item.createdBy}
            category={item.category}
            commentCount={item.commentCount}
            time={item.time}
            upvotes={item.upvotes}
          ></Card>
        ))}
    </>
  );
}

export default CardList;
