import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: "#000099" }}>
				<Toolbar>
					<Box sx={{ flexGrow: 1 }}>
						<Link to="/">
							<Typography variant="h6" component="div" sx={{ ml: -14 }}>
								Game Store
							</Typography>
						</Link>
					</Box>					
						<Button color="inherit">Sign in</Button>					
					<Link to="/cart">
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="cart"
							sx={{ ml: 2, mr: -1 }}
						>
							<ShoppingCartIcon />
						</IconButton>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
