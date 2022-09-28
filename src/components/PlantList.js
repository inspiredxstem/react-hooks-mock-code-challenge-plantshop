import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, onDelete, updatePrice}) {
  return (
    <ul className="cards">{
      plants.map(plant => {
        return <PlantCard key={plant.id} plant={plant} deletePlant={onDelete} onUpdatePrice={updatePrice}/>
      })
    }</ul>
  );
}

export default PlantList;
