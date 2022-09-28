import React, {useState} from "react";

function PlantCard({plant, deletePlant, onUpdatePrice}) {
  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState("")

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    deletePlant(plant)
  }

  function handleChange(e){
    setNewPrice(e.target.value)
  }
  function handleUpdate(e){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        price: newPrice
      })
    })
    .then(res => res.json())
    .then(updatedPrice => onUpdatePrice(updatedPrice))
  }

  function handleClick(){
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <form onSubmit={handleUpdate}>
        <input type="number" name="price" placeholder="Price" value={newPrice} step="0.01" onChange={handleChange}></input>
        <button type="submit">Update</button>
      </form>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button className="delete" onClick={handleDelete}>Delete</button>
      
    </li>
  );
}
export default PlantCard;
