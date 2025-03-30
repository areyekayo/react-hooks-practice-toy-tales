import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToys(data))
  })

  function addNewToy(newToy){
    setToys([...toys, newToy])
  }

  function deleteToy(deletedToyId){
    const updatedToys = toys.filter((toy) => toy.id !== deletedToyId);
    setToys(updatedToys)
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmitToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteToy={deleteToy} />
    </>
  );
}

export default App;
