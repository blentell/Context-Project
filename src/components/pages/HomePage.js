import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../fetchData";
import Layout from "../layout/Layout";
import DisplayPage from "./ProductDisplay";

function HomePage() {
	const [productData, setProductData] = useState();
  // const { addItemsToCart } = useShoppingCart();
  
// useReducer must be dispatched to change state
    
	useEffect(() => {
		fetchProducts().then((data) => setProductData(data));
	}, []);

	if (!productData) {
		return null;
  }

  
	return (
    <Layout>
      {/* button added to show example of redux changed state */}
      {/* <button onClick={() => {
        dispatch({type: "USER_LOGGED_IN"})
      }}>Log in User</button> */}
			<Box p={4}>
				{productData.map((product) => (
					<Box key={product.id} mb={2}>
						<DisplayPage						
							product={{
								id: product.id,
								title: product.title,
								brand: product.brand,
								price: product.price,
								image: product.image,
								description: product.description,
							}}
							key={product.id}
						/>
					</Box>
				))}
			</Box>
		</Layout>
	);
}

export default HomePage;
