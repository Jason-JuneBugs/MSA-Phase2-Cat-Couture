 

import React from "react";
import { Card, CardContent,CardActions, CardMedia, Typography, Button } from "@mui/material";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  imageName?: string;
  // Add other props as needed
}

const Product: React.FC<ProductProps> = ({
  name,
  description,
  price,
  imageName,
}) => {
  return (
    <Card style={{ height: "100%", width:"100%"}}>
      <CardMedia
        component="img"
        alt={imageName || "Default product cat"}
        height="60%"
        image={imageName ? `${process.env.PUBLIC_URL}/img/${imageName}` : "./img/cat-photo-default.jpg"}
      />
      <CardContent style={{height:"20%"}}>
        <Typography variant="h6" component="h1"> {name} </Typography>
        <Typography variant="body1">Price: {`${price} NZD`}</Typography>
        <Typography variant="body2" data-testid="product-description">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'flex-end', marginBottom: '1px' ,height:"auto"}}>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardActions>
      
    </Card>
 
  );
};

export default Product;
