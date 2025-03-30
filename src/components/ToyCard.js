import React from "react";

function ToyCard({id, name, image, likes, onDeleteClick}) {

  function handleDeleteClick() {
      fetch(`http://localhost:3001/toys/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((data) => onDeleteClick(id))
  }

  return (
    <div className="card" id={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
