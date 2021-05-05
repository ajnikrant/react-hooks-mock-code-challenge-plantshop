import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArray}) {

  const renderPlants = plantArray.map((plant) => <PlantCard key={plant.id} plant={plant} />)


  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
