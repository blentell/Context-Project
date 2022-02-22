import HomeIcon from "@mui/icons-material/Home";
import ReplayIcon from "@mui/icons-material/Replay";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCartAction } from "../../reduxStore";
import Layout from "../layout/Layout";
import CartItem from "./CartItem";

function CartPage() {
 
  const shoppingCart = useSelector((state) => state.shoppingCart);

	const total = shoppingCart.reduce((acc, cartItem) => {
		return acc + cartItem.price * cartItem.quantity;
	}, 0);

	const dispatch = useDispatch();

	const emptyCart = () => {
		dispatch({ type: emptyCartAction });
  };
  
	return (
		<Layout>
			<h1 style={{ color: "white", textDecoration: "underline" }}>Shopping Cart</h1>
			<Box p={2} minHeight={752}>
				{shoppingCart.map((item) => (
					<Box mb={2} key={item.id}>
						<CartItem
							cartItem={{
								id: item.id,
								title: item.title,
								price: item.price,
								quantity: item.quantity,
								image: item.image,
							}}
						/>
					</Box>
				))}
				<Box marginTop="40px" display="flex" justifyContent="center">
					<Typography style={{ color: "white" }}>
						Total: $ {total / 100}
					</Typography>
				</Box>
				<Box marginTop="20px" display="flex" justifyContent="center">
					<Button
						sx={{ width: "220px", backgroundColor: "#0000B8" }}
						variant="contained"
					>
						CHECKOUT
					</Button>
				</Box>
				<Box marginTop="20px" display="flex" justifyContent="center">
					<Button
						sx={{ width: "220px", backgroundColor: "#0000B8" }}
						variant="contained"
						startIcon={<ReplayIcon />}
						onClick={emptyCart}
					>
						Empty Cart
					</Button>
				</Box>
				<Box marginTop="20px" display="flex" justifyContent="center">
					<Link to="/">
						<Button
							sx={{ width: "220px", backgroundColor: "#0000B8" }}
							variant="contained"
							startIcon={<HomeIcon />}
						>
							Back to home page
						</Button>
					</Link>
				</Box>
			</Box>
		</Layout>
	);
}

export default CartPage;
