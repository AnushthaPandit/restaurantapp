import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import RestaurantList from "./pages/RestaurantList";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import RestDetails from "./pages/RestDetails";
import CustomerOrdersList from "./pages/OrderList";
import RestLogin from "./pages/RestLogin";
import Dashboard from "./pages/RestAdmin/Dashboard";
import FoodList from "./pages/RestAdmin/FoodList";
import AddFood from "./pages/RestAdmin/AddFood";
import EditFoodItem from "./pages/RestAdmin/EditFoodItem";
import ProfileDetails from "./pages/RestAdmin/ProfileDetails";
import OrdersList from "./pages/RestAdmin/OrdersList";
import PromoCodesList from "./pages/RestAdmin/PromoCodes";
import AdminLogin from "./pages/Admin/Login";
import AdminDash from "./pages/Admin/Dashboard";
import AdminRestList from "./pages/Admin/RestList";
import AdminOrdersList from "./pages/Admin/OrdersList";
import AdminUserList from "./pages/Admin/UserList";
import AdminUserOrderList from "./pages/Admin/UserOrderList";
import OrderDeatils from "./pages/OrderDeatils";

import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";

import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
	const [{}, dispatch] = useStateValue();

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
					<Route path="/restaurant/:id" element={<RestDetails />} />
					<Route
						path="/checkout/:id"
						element={
							<PrivateRoute role="user">
								<Checkout />
							</PrivateRoute>
						}
					/>
					<Route
						path="/pay/:checkout_id"
						element={
							<PrivateRoute role="user">
								<Payment />
							</PrivateRoute>
						}
					/>
					<Route
						path="/orders"
						element={
							<PrivateRoute role="user">
								<CustomerOrdersList />
							</PrivateRoute>
						}
					/>
					<Route path="/restaurant-login" element={<RestLogin />} />
					<Route
						path="/rest-admin"
						element={
							<PrivateRoute role="restUser">
								<Dashboard />
							</PrivateRoute>
						}
					/>
					<Route
						path="/rest-food-list"
						element={
							<PrivateRoute role="restUser">
								<FoodList />
							</PrivateRoute>
						}
					/>
					<Route
						path="/rest-add-food"
						element={
							<PrivateRoute role="restUser">
								<AddFood />
							</PrivateRoute>
						}
					/>
					<Route
						path="/rest-food-item/:id/edit"
						element={
							<PrivateRoute role="restUser">
								<EditFoodItem />
							</PrivateRoute>
						}
					/>
					<Route
						path="/rest-order-list"
						element={
							<PrivateRoute role="restUser">
								<OrdersList />
							</PrivateRoute>
						}
					/>
					<Route
						path="/rest-codes-list"
						element={
							<PrivateRoute role="restUser">
								<PromoCodesList />
							</PrivateRoute>
						}
					/>
					<Route
						path="/rest-profile-details"
						element={
							<PrivateRoute role="restUser">
								<ProfileDetails />
							</PrivateRoute>
						}
					/>
					<Route path="/admin-login" element={<AdminLogin />} />
					<Route
						path="/admin"
						element={
							<PrivateRoute role="admin">
								<AdminDash />
							</PrivateRoute>
						}
					/>
					<Route
						path="/admin-rest-list"
						element={
							<PrivateRoute role="admin">
								<AdminRestList />
							</PrivateRoute>
						}
					/>
					<Route
						path="/admin-orders-list"
						element={
							<PrivateRoute role="admin">
								<AdminOrdersList />
							</PrivateRoute>
						}
					/>
					<Route
						path="/admin-users-list"
						element={
							<PrivateRoute role="admin">
								<AdminUserList />
							</PrivateRoute>
						}
					/>
					<Route
						path="/admin-user-order-list/:id"
						element={
							<PrivateRoute role="admin">
								<AdminUserOrderList />
							</PrivateRoute>
						}
					/>
					<Route path="/order-details/:id" element={<OrderDeatils />} />
				</Routes>
			</div>
			<Footer />
		</AnimatePresence>
	);
};

export default App;
