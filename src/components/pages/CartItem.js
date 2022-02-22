import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch } from 'react-redux';
import { removeItemFromCartAction } from "../../reduxStore";

export default function CartItem(props) {
	// const { removeItem } = useShoppingCart();
	const {
		cartItem: { id, title, image, quantity, price },
  } = props;

  const dispatch = useDispatch();

	const removeItem = (id) => {
		dispatch({
			type: removeItemFromCartAction,
			itemId: id,
		});
	};
  // Redux example of state change
  // const reduxState = useSelector((state) => state.user);

  // console.log('reduxState: ', reduxState);

	return (
		<Card sx={{ display: "flex", backgroundColor: "#0000B8", color: "white"}}>
			<CardMedia
				component="img"
				sx={{ height: 80, maxWidth: 80, p: 1 }}
				image={image}
				alt={title}
			/>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				flexGrow={1}
			>
				<Box mb={1}>
					<Typography fontSize="12px" fontWeight="bold">
						{title}
					</Typography>
				</Box>
				<Box>
					<Typography fontWeight="bold">$ {price / 100}</Typography>
				</Box>
			</Box>
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Box px={1}>
					<Typography fontSize="12px" fontWeight="bold">
						x{quantity}
					</Typography>
				</Box>
			</Box>
			<Box display="flex" flexDirection="column" justifyContent="center">
				<Box px={1}>
					<IconButton
						onClick={() => {
							removeItem(id);
						}}
					>
						<DeleteForeverIcon color="error" />
					</IconButton>
				</Box>
			</Box>
		</Card>
	);
}
