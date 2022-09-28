import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const[search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res=>res.json())
    .then(data =>
      setPlants(data)
    )
  }, [])

  function addNewPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  function deletePlant(removePlant){
    setPlants(plants.filter(plant => plant.id !== removePlant.id))
  }

  function handleUpdatePrice(updatedPrice) {
    setPlants(plants.map(plant =>{
      return plant.id === updatedPrice.id ? updatedPrice : plant
    }))
  }

  const displayPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  console.log(displayPlants)
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search search={search} onSearch={setSearch}/>
      <PlantList plants={displayPlants} setPlants={setPlants} onDelete={deletePlant} updatePrice={handleUpdatePrice}/>
    </main>
  );
}

export default PlantPage;
