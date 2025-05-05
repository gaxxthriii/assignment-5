
import {
  Container,
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material';
import React, { useState, useEffect } from 'react';


function AddProduct() {
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

    const newProduct = {
      ...form,
      id: Date.now(),
      price: parseFloat(form.price),
      rating: { rate: parseFloat(form.rating.rate) }
    };

    console.log("New Product:", newProduct);

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
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add New Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          name="title"
          label="Product Title"
          value={form.title}
          onChange={handleChange}
          error={!!errors.title}
          helperText={errors.title}
        />
        <TextField
          name="image"
          label="Image URL"
          value={form.image}
          onChange={handleChange}
          error={!!errors.image}
          helperText={errors.image}
        />
        <TextField
          name="price"
          label="Price"
          value={form.price}
          onChange={handleChange}
          error={!!errors.price}
          helperText={errors.price}
        />
        <TextField
          name="rate"
          label="Rating"
          value={form.rating.rate}
          onChange={handleChange}
          error={!!errors.rating}
          helperText={errors.rating}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </Box>
    </Container>
  );
}

export default AddProduct;
