import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Implement the curried handleChange function
  const handleChange = (fieldName) => (event) => {
    setFormData({ ...formData, [fieldName]: event.target.value });
  };

  return (
    <>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange("name")} // Pass the field name to handleChange
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange("email")} // Pass the field name to handleChange
        />
      </div>
    </>
  );
};

export default App;
