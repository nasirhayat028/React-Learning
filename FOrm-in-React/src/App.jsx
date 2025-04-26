import { useState } from "react";
import "./App.css";

function App() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    address: {
      street: "",
      city: "",
      country: "",
    },
  });

  // Function to handle input changes using spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Using spread operator for nested objects
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      // Using functional update for better state management
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>
        <div>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            placeholder="Enter your street"
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            placeholder="Enter your country"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
