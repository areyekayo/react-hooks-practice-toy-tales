import React, {useState} from "react";

function ToyCard({id, name, image, likes, onDeleteClick}) {
  const [newLikes, setLikes] = useState(likes)

  function handleDeleteClick() {
      fetch(`http://localhost:3001/toys/${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((data) => onDeleteClick(id))
  }

  function handleLikeClick(){
    setLikes((prevLikes) => {
      const incrementedLikes = prevLikes + 1;

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: incrementedLikes
      })
    })
      .then((r) => r.json())
      .then((updatedToy) => console.log(updatedToy));

    return incrementedLikes
  });
}

  return (
    <div className="card" id={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{newLikes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
