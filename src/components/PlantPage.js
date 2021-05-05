import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArray, setPlantArray] = useState([])
  const [search, setSearch] = useState("")


  useEffect(()=> {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(setPlantArray)
  }, [])

  function onAddPlant(newPlant){
    setPlantArray([...plantArray, newPlant])
  }

  const filteredArray = plantArray.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm sendPlantUp={onAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plantArray={filteredArray}/>
    </main>
  );
}

export default PlantPage;
