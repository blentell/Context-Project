import React, { useEffect, useState } from "react";

import Layout from "../layout/Layout";
import { fetchProducts } from "../../fetchData";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

function HomePage() {
	const [productData, setProductData] = useState();

  
	useEffect(() => {
		fetchProducts().then((data) => setProductData(data));
	}, []);

	if (!productData) {
		return null;
  }


	return (
		<Layout>
			<div>HomePage</div>
			<Box p={4}>
				{productData.map((product) => (
					<Box key={product.id} mb={2} border="1px solid black">
						<div>{product.title}</div>
						<div>{product.brand}</div>
						<div>$ {product.price / 100}</div>
						<img id="productImage" src={product.image}></img>
						<div>{product.description}</div>
						<div>
							<Button
								sx={{ color: "black" }}
								variant="text"
							>
								Add to cart
							</Button>
						</div>
					</Box>
				))}
			</Box>
		</Layout>
	);
}

export default HomePage;
