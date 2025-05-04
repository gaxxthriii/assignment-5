
import React, { useState, useEffect } from 'react';

function AddProduct({ setProducts }) {
  const [form, setForm] = useState({
    title: "",
    image: "",
    price: "",
    rating: { rate: "" }
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.title) err.title = "Title is required";
    if (!form.image) err.image = "Image URL is required";
    if (!form.price || isNaN(form.price)) err.price = "Valid price is required";
    if (!form.rating.rate || isNaN(form.rating.rate)) err.rating = "Valid rating is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    // Add new product
    const newProduct = {
      ...form,
      id: Date.now(), // unique id
      price: parseFloat(form.price),
      rating: { rate: parseFloat(form.rating.rate) }
    };

    setProducts(prev => [newProduct, ...prev]);
    alert("Product added!");
    setForm({ title: "", image: "", price: "", rating: { rate: "" } });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rate") {
      setForm({ ...form, rating: { rate: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <input name="title" placeholder="Product Title" value={form.title} onChange={handleChange} />
      {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}

      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}

      <input name="rate" placeholder="Rating" value={form.rating.rate} onChange={handleChange} />
      {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}

      <button type="submit" style={{ backgroundColor: "black", color: "white" }}>Add Product</button>
    </form>
  );
}

export default AddProduct;
