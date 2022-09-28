import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
  const [newPlantForm, setNewPlantForm] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(e){
    setNewPlantForm({...newPlantForm,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newPlantForm.name,
        image: newPlantForm.image,
        price: newPlantForm.price
      })
    })
    .then(res=>res.json())
    .then(newPlant => addNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlantForm.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlantForm.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
