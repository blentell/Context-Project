import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
// import { useShoppingCart } from "../../context/shoppingCartContext";
import { useDispatch } from "react-redux";
import { addItemToCartAction } from "../../reduxStore";

export default function ProductDisplay(props) {
	// const { addItemsToCart } = useShoppingCart();

	const dispatch = useDispatch();

	const { product } = props;
	const { id, title, brand, price, image, description } = product;

	const handleAddToCart = () => {
		dispatch({
			type: addItemToCartAction,
			cartItem: {
				id: product.id,
				title: product.title,
				brand: product.brand,
				price: product.price,
				image: product.image,
				description: product.description,
			},
		});
		// addItemsToCart(product);
	};
	return (
		<Card sx={{ mx: "auto", backgroundColor: "#0000B8", color: "white" }}>
			<CardHeader
				action={<Typography>$ {price / 100}</Typography>}
				title={title}
				subheader={<Typography variant="body2">{brand}</Typography>}
			/>
			<CardMedia
				component="img"
				height="194"
				src={image}
				id="productImage"
				alt={title}
			/>
			<CardContent>
				<Typography
					sx={{ color: "white" }}
					variant="body2"
					color="text.secondary"
				>
					{description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Button
					sx={{ color: "white", backgroundColor: "darkGray" }}
					variant="text"
					onClick={handleAddToCart}>
					Add to cart
				</Button>
				<IconButton aria-label="add to favorites" sx={{ marginLeft: "auto" }}>
					<FavoriteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
