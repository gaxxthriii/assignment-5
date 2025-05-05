

import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material';

const Home = ({ products }) => {
  return (
    <Container sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Product Dashboard
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                height: 320,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 2,
                padding: 2,
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  width: 120,
                  height: 120,
                  objectFit: 'contain',
                  marginBottom: 2,
                }}
              />
              <CardContent
                sx={{
                  textAlign: 'center',
                  padding: 0,
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  width: '100%',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    mb: 1,
                  }}
                >
                  {product.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2">
                  Rating: {product.rating.rate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;