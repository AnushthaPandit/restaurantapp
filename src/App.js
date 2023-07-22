import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import RestaurantList from "./pages/RestaurantList";
import Checkout from "./pages/Checkout";
import RestDetails from "./pages/RestDetails";
import RestLogin from "./pages/RestLogin";
import Dashboard from "./pages/RestAdmin/Dashboard";
import FoodList from "./pages/RestAdmin/FoodList";
import AddFood from "./pages/RestAdmin/AddFood";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
	const [{ foodItems }, dispatch] = useStateValue();

	const fetchData = async () => {
		await getAllFoodItems().then((data) => {
			dispatch({
				type: actionType.SET_FOOD_ITEMS,
				foodItems: data,
			});
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AnimatePresence exitBeforeEnter>
			<div className="w-screen h-auto flex flex-col bg-primary">
				<Routes>
					<Route path="/" element={<RestaurantList />} />
					<Route path="/restaurant-login" element={<RestLogin />} />
					<Route path="/restaurant/:slug" element={<RestDetails />} />
					<Route path="/checkout/:id" element={<Checkout />} />
					<Route path="/createItem" element={<CreateContainer />} />
					<Route path="/rest-admin" element={<Dashboard />} />
					<Route path="/rest-food-list" element={<FoodList />} />
					<Route path="/rest-add-food" element={<AddFood />} />
				</Routes>
			</div>
		</AnimatePresence>
	);
};

export default App;
