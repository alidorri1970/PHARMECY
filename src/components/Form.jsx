import React, { useState } from "react";


export const Form = () => {
  const [file, setFile] = useState(null); 
  const [preview, setPreview] = useState("");  // State for the image preview

  const [formData, SetFormData] = useState({
    titleP: "",
    desP: "",
    logoP: "",
    priceP: "",
    categoryP: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    SetFormData((prevData) => ({
      ...prevData,
      [name]: value,

    }));
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile) {
      setFile(selectedFile); 
  
      setFile((prevData) => ({
        ...prevData,
        photop: selectedFile, 
      }));
    }
  
    //image preview
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const objectURL = URL.createObjectURL(selectedFile);
      setPreview(objectURL);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
  
    const data = new FormData();
    data.append("title", formData.titleP);
    data.append("price", formData.priceP);
    data.append("description", formData.desP);
    data.append("image", file); 
    data.append("category", formData.categoryP);

  
    console.log("FormData entries:");
    for (let pair of data.entries()) {
      console.log(pair[0], pair[1]); 
    }

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: data,
    })

    .then((response) => response.json())
    .then((result) => console.log("Success:", result))
    .catch((error) => console.error("Error:", error));

    setFile(null);
    setPreview("");
    SetFormData({
      titleP: "",
      desP: "",
      logoP: "",
      priceP: "",
      categoryP: ""
    });
    alert("values and states are reset!!!!");

  }


  return (
    <>
    <h1>{file ? "good!" : "No file selected!"}</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input type="text" name="titleP" value={formData.titleP} onChange={handleChange} required />
      </div>

      <div>
        <label>Description:</label>
        <input type="text" name="desP" value={formData.desP} onChange={handleChange} required />
      </div>

      <div>
        <label>Logo:</label>
        <input type="text" name="logoP" value={formData.logoP} onChange={handleChange} required />
      </div>

      <div>
        <label>category Name:</label>
        <input type="text" name="categoryP" value={formData.categoryP} onChange={handleChange} required />
      </div>

      <div>
        <label>Price:</label>
        <input type="text" name="priceP" value={formData.priceP} onChange={handleChange} required />
      </div>

      <div>
        <label>Upload Photo:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} required />
      </div>

      {/* Show image preview if a photo is selected */}
      {preview && (
        <div>
          <h3>Image Preview:</h3>
          <img src={preview} alt="Preview" style={{ maxWidth: "300px" }} />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
    </>
  );
};
