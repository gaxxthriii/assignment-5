import { useState } from "react";

function AddProductForm() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
    rating: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.image) err.image = "Image URL is required";
    if (!form.price || isNaN(form.price)) err.price = "Valid price is required";
    if (!form.rating || isNaN(form.rating)) err.rating = "Valid rating is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    console.log("Submitted Product:", form);
    alert("Product added! Check console.");
    setForm({ name: "", image: "", price: "", rating: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}

      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}

      <input name="rating" placeholder="Rating" value={form.rating} onChange={handleChange} />
      {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
