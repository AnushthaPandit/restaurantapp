import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeContainer from "../components/HomeContainer";

import { useStateValue } from "../context/StateProvider";
import MenuContainer from "../components/MenuContainer";
import CartContainer from "../components/CartContainer";
import CustomerPage from "../components/CustomerPage.container";
import Loader from "../components/Loader";

import { fetchAllFoodItemsData } from "../schemas/food_items.schema";
import { fetchProfileData } from "../schemas/restuser.schema";
import ReviewBox from "../components/ReviewBox";

const reviews = [
	{
		id: 1,
		name: "Oliver Jake",
		rating: 5,
		desc: "Nice rest.",
	},
	{
		id: 2,
		name: "Amelia",
		rating: 4,
		desc: "Quality Food.",
	},
	{
		id: 3,
		name: "John Doe",
		rating: 3,
		desc: "Serves Hot.",
	},
	{
		id: 4,
		name: "Emily",
		rating: 2,
		desc: "Customer Service is nice.",
	},
];

const RestDetails = () => {
	const [{ cartShow, user }] = useStateValue();
	const { id } = useParams(); //rest doc id
	const [isLoading, setisLoading] = useState(false);
	const [isReviewLoading, setisReviewLoading] = useState(false);
	const [foodItems, setfoodItems] = useState([]);
	const [restDetails, setrestDetails] = useState();
	const [cartItems, setcartItems] = useState([]);
	const [descText, setdescText] = useState("");

	const addToCart = (item) => {
		const itemIndex = cartItems.findIndex((v) => v.doc_id === item.doc_id);
		if (itemIndex > -1) {
			setcartItems((prev) => {
				prev[itemIndex].qty = prev[itemIndex].qty + 1;
				return [...prev];
			});
		} else {
			setcartItems((prev) => [...prev, item]);
		}
	};

	const removeFromCart = (item) => {
		setcartItems((prev) => {
			const itemIndex = prev.findIndex((v) => v.doc_id === item.doc_id);
			if (prev[itemIndex].qty === 1) {
				return prev.filter((v) => v.doc_id !== item.doc_id);
			}

			prev[itemIndex].qty = prev[itemIndex].qty - 1;
			return [...prev];
		});
	};

	const emptyCart = () => {
		setcartItems([]);
	};

	const handleReviewSubmit = (e) => {
		e.preventDefault();
		setisReviewLoading(true);
		setTimeout(() => {
			alert("Submitted!, rating will be published after review.");
			setisReviewLoading(false);
			setdescText("");
		}, 1500);
	};

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);

				const data = await fetchAllFoodItemsData(id);
				const profData = await fetchProfileData(id);

				setrestDetails(profData);
				setfoodItems(data.filter((v) => v.isInStock));
			} catch (error) {
			} finally {
				setisLoading(false);
			}
		})();
	}, [id]);

	if (isLoading) {
		return (
			<center>
				<Loader />
			</center>
		);
	}

	if (!restDetails) {
		return <center> NO Page Found!</center>;
	}

	return (
		<CustomerPage cartItemsCount={cartItems.length} doShowCartBtn>
			<div className="w-full h-auto flex flex-col items-center justify-center ">
				<HomeContainer
					title={restDetails.title}
					desc={restDetails.desc}
					isNonVeg={restDetails.nonveg}
					isVeg={restDetails.veg}
					items={foodItems.slice(0, 5)}
					number={restDetails.contact}
				/>

				<MenuContainer addToCart={addToCart} foodItems={foodItems} />

				<section className="w-full my-6" id="menu">
					<div className="w-full flex flex-col items-center justify-center">
						<p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
							Reviews
						</p>
					</div>

					<div className="w-full flex flex-col items-center justify-center">
						<div style={{ width: "500px" }}>
							{user ? (
								<form onSubmit={handleReviewSubmit} className="mb-5">
									<div className="mb-5">
										<h3 className="text-xl">Write a review</h3>
									</div>
									<div className="mb-3">
										<label
											for="rating"
											class="block mb-2 text-sm font-medium text-gray-900">
											Rating
										</label>
										<select
											id="rating"
											required
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5" selected>
												5
											</option>
										</select>
									</div>
									<div class="mb-6">
										<label
											for="password"
											class="block mb-2 text-sm font-medium text-gray-900">
											Your Description
										</label>
										<input
											onChange={(e) => setdescText(e.target.value)}
											value={descText}
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 text-white"
											required></input>
									</div>
									<button
										type="submit"
										disabled={isReviewLoading}
										class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
										{isReviewLoading ? "Loading.." : "Submit"}
									</button>
								</form>
							) : (
								<h1>Please login to write a review</h1>
							)}

							<hr className="mb-4" />

							{reviews.map((v) => (
								<div className="my-4">
									<ReviewBox
										key={v.id}
										name={v.name}
										desc={v.desc}
										rating={v.rating}
									/>
									<hr className="" />
								</div>
							))}
						</div>
					</div>
				</section>

				{cartShow && (
					<CartContainer
						addToCart={addToCart}
						removeFromCart={removeFromCart}
						cartItems={cartItems}
						emptyCart={emptyCart}
					/>
				)}
			</div>
		</CustomerPage>
	);
};

export default RestDetails;
