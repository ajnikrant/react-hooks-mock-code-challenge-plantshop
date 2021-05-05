import React, {useState} from "react";

function NewPlantForm({sendPlantUp}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "", 
    price: ""
  })


  function handleChange(e){
    e.preventDefault()

    setFormData({...formData, 
      [e.target.name]: e.target.value})
  }

  function handleSubmit(){
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }

    fetch('http://localhost:6001/plants',{
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPlant)
    })

    sendPlantUp(newPlant)
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
