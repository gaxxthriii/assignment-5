
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
    <Container sx={{ padding: '2rem', backgroundColor: '#f7f7f7' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#333',
          fontWeight: 'bold',
          mb: 4,
        }}
      >
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
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.15)',
                },
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
                  backgroundColor: '#fff',
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: '#444',
                    mb: 1,
                    fontWeight: '500',
                  }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1e88e5', // blue color for price
                    fontWeight: 'bold',
                    mb: 0.5,
                  }}
                >
                  Price: ${product.price}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#fbc02d', // yellow for rating
                    fontWeight: 'bold',
                  }}
                >
                  Rating: {product.rating.rate} ★
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