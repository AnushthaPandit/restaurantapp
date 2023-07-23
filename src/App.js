import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RestaurantList from "./pages/RestaurantList";
import Checkout from "./pages/Checkout";
import RestDetails from "./pages/RestDetails";
import RestLogin from "./pages/RestLogin";
import Dashboard from "./pages/RestAdmin/Dashboard";
import FoodList from "./pages/RestAdmin/FoodList";
import AddFood from "./pages/RestAdmin/AddFood";
import ProfileDetails from "./pages/RestAdmin/ProfileDetails";
import OrdersList from "./pages/RestAdmin/OrdersList";
import AdminDash from "./pages/Admin/Dashboard";
import AdminRestList from "./pages/Admin/RestList";
import AdminOrdersList from "./pages/Admin/OrdersList";
import AdminUserList from "./pages/Admin/UserList";
import AdminUserOrderList from "./pages/Admin/UserOrderList";
import OrderDeatils from "./pages/OrderDeatils";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
	const [dispatch] = useStateValue();

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
					<Route path="/restaurant/:slug" element={<RestDetails />} />
					<Route path="/checkout/:id" element={<Checkout />} />
					<Route path="/restaurant-login" element={<RestLogin />} />
					<Route path="/rest-admin" element={<Dashboard />} />
					<Route path="/rest-food-list" element={<FoodList />} />
					<Route path="/rest-add-food" element={<AddFood />} />
					<Route path="/rest-order-list" element={<OrdersList />} />
					<Route path="/rest-profile-details" element={<ProfileDetails />} />
					<Route path="/admin" element={<AdminDash />} />
					<Route path="/admin-rest-list" element={<AdminRestList />} />
					<Route path="/admin-orders-list" element={<AdminOrdersList />} />
					<Route path="/admin-users-list" element={<AdminUserList />} />
					<Route
						path="/admin-user-order-list/:id"
						element={<AdminUserOrderList />}
					/>
					<Route path="/order-details/:id" element={<OrderDeatils />} />
				</Routes>
			</div>
		</AnimatePresence>
	);
};

export default App;
