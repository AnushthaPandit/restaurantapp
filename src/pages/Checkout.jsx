import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import CustomerPage from "../components/CustomerPage.container";
import Loader from "../components/Loader";

import {
	fetch_checkout_by_id,
	delete_checkout,
} from "../schemas/checkout.schema";
import { insert_order_data } from "../schemas/orders.schema";
import { fetchAllCodesData } from "../schemas/promo_codes.schema";
import { useStateValue } from "../context/StateProvider";

import qr_image from "../img/qr_code_barcode.jpg";

const Checkout = () => {
	const [{ user }] = useStateValue();
	const { id: checkout_doc_id } = useParams();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const [codeslist, setcodeslist] = useState([]);
	const [selectedCode, setselectedCode] = useState(null);

	const is_repeated = searchParams.get("repeated") === "true";

	const [isLoading, setisLoading] = useState(false);
	const [formState, setformState] = useState({
		name: "",
		contact: 0,
		address: "",
		city: "",
		postcode: 0,
	});
	const [details, setdetails] = useState({});
	const [orderLoading, setorderLoading] = useState(false);

	let totalPrice = 0;
	let substract_amount = is_repeated ? 1 : 0;
	let tax_amt = 10;
	let sub_total_price = 0;
	let code_data = null;
	let percent_price_to_deduct = 0;

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);

				const data = await fetch_checkout_by_id(checkout_doc_id);
				if (data) {
					const codes = await fetchAllCodesData(data.rest_doc_id);
					setcodeslist(codes);
				}
				setdetails(data);
			} catch (error) {
			} finally {
				setisLoading(false);
			}
		})();
	}, [checkout_doc_id]);

	useEffect(() => {
		setformState((prev) => ({ ...prev, name: user.displayName }));
	}, [user.displayName]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const name = formState.name.trim();
		const address = formState.address.trim();
		const city = formState.city.trim();
		const contact = formState.contact.trim();
		const postcode = formState.postcode.trim();

		if (!name || !address || !city) {
			alert("Please fill all the details!");
			return;
		}

		if (contact.length !== 10) {
			alert("Contact must be of 10 digits!");
			return;
		}

		if (postcode.length < 4 || postcode < 8) {
			alert("Postcode can be greater than 3 digits and less than 8 digits!");
			return;
		}

		setorderLoading(true);

		const dt = {
			...details,
			...formState,
			status: "pending",
			sub_total: sub_total_price,
			total_price: totalPrice,
			is_repeated,
			substract_amount,
			code_data,
			percent_price_to_deduct,
		};

		await insert_order_data(dt);
		await delete_checkout(checkout_doc_id);

		setorderLoading(false);

		alert("You're oreder has been placed!!");
		navigate("/restaurant/" + details.rest_doc_id);
	};

	const handleChange = (e) => {
		setformState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	if (isLoading) {
		return (
			<center>
				<Loader />
			</center>
		);
	}

	if (!details) {
		return <center> NO Page Found!</center>;
	}

	if (user.uid !== details.uid) {
		return <center> NO Page Found!</center>;
	}

	sub_total_price = details.cartItems.reduce(function (accumulator, item) {
		return accumulator + parseFloat(item.qty) * parseFloat(item.price);
	}, 0);

	totalPrice = sub_total_price + tax_amt - substract_amount;

	if (selectedCode) {
		code_data = codeslist.find((v) => v.doc_id === selectedCode);
		percent_price_to_deduct = Number(
			(code_data.off / 100) * totalPrice
		).toFixed(2); //will return 12% of total
		totalPrice = Number(totalPrice - percent_price_to_deduct).toFixed(2);
	}

	return (
		<CustomerPage>
			<div className="mt-20">
				<h1 className="flex items-center justify-center font-bold text-orange-600 text-md lg:text-2xl">
					Your food is almost there.. but where? give me your address!
				</h1>
			</div>
			<div className="container p-12 mx-auto">
				<div className="flex flex-col w-full px-0 mx-auto md:flex-row">
					<div className="flex flex-col md:w-full">
						<h2 className="mb-4 font-bold md:text-xl text-heading ">Address</h2>
						<form
							className="justify-center w-full mx-auto"
							onSubmit={handleSubmit}>
							<div className="">
								<div className="space-x-0 lg:flex lg:space-x-4">
									<div className="w-full lg:w-1/2">
										<label
											for="name"
											className="block mb-3 text-sm font-semibold text-gray-500">
											Name
										</label>
										<input
											value={formState.name}
											onChange={handleChange}
											name="name"
											minLength={3}
											id="name"
											type="text"
											placeholder="Name"
											className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
											required
										/>
									</div>
									<div className="w-full lg:w-1/2 ">
										<label
											for="contact"
											className="block mb-3 text-sm font-semibold text-gray-500">
											Contact
										</label>
										<input
											onChange={handleChange}
											name="contact"
											value={formState.contact}
											minLength={10}
											maxLength={10}
											id="contact"
											type="number"
											placeholder="10 digit phone number"
											className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
											required
										/>
									</div>
								</div>
								<div className="mt-4">
									<div className="w-full">
										<label
											for="address"
											className="block mb-3 text-sm font-semibold text-gray-500">
											Address
										</label>
										<textarea
											onChange={handleChange}
											id="address"
											value={formState.address}
											minLength={10}
											name="address"
											className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
											cols="20"
											rows="4"
											placeholder="Address"
											required></textarea>
									</div>
								</div>
								<div className="space-x-0 lg:flex lg:space-x-4">
									<div className="w-full lg:w-1/2">
										<label
											for="city"
											className="block mb-3 text-sm font-semibold text-gray-500">
											City
										</label>
										<input
											id="city"
											onChange={handleChange}
											value={formState.city}
											name="city"
											type="text"
											placeholder="City"
											minLength={4}
											className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
											required
										/>
									</div>
									<div className="w-full lg:w-1/2 ">
										<label
											for="postcode"
											className="block mb-3 text-sm font-semibold text-gray-500">
											Postcode
										</label>
										<input
											name="postcode"
											type="number"
											onChange={handleChange}
											value={formState.postcode}
											minLength={5}
											placeholder="Post Code"
											className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
											required
										/>
									</div>
								</div>

								<center>
									<h3>Please Pay your bill using below qr code</h3>
									<img src={qr_image} alt="qr code" />
								</center>

								<div className="mt-4">
									<button
										type="submit"
										className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
										disabled={orderLoading}>
										{orderLoading ? "Loading..." : "Order Now!"}
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
						<div className="pt-12 md:pt-0 2xl:ps-4">
							<h2 className="text-xl font-bold">Order Summary</h2>
							<div className="mt-8">
								<div className="flex flex-col space-y-4">
									{details.cartItems.map((v, i) => (
										<div className="flex space-x-4">
											<div>
												<img
													src={v.imageURL}
													alt="cart Item"
													className="w-60"
												/>
											</div>
											<div>
												<h2 className="text-xl font-bold">{v.title}</h2>
												<p className="text-sm">
													Lorem ipsum dolor sit amet, tet
												</p>
												<span className="text-red-600">Price</span> &pound;
												{v.price} * {v.qty} = &pound;
												{parseFloat(v.price) * parseFloat(v.qty)}
											</div>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="w-6 h-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</div>
										</div>
									))}
								</div>
							</div>
							{codeslist.length > 0 ? (
								<div className="mb-3">
									<label
										for="rating"
										class="block mb-2 text-sm font-medium text-gray-900">
										Promo Codes
									</label>
									<select
										id="rating"
										required
										value={selectedCode}
										onChange={(e) => setselectedCode(e.target.value)}
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
										<option>Select Promo Code</option>
										{codeslist.map((v, i) => (
											<option key={i} value={v.doc_id}>
												{v.title} ({v.off}%)
											</option>
										))}
									</select>
								</div>
							) : null}
							<div className="flex p-4 mt-4">
								<h2 className="text-xl font-bold">Total</h2>
							</div>
							<div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
								Subtotal<span className="ml-2">&pound;{sub_total_price}</span>
							</div>
							<div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
								Delivery And Other Taxes
								<span className="ml-2">&pound;{tax_amt}</span>
							</div>
							{is_repeated && (
								<div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
									Repeated Order Discount (&pound;{substract_amount})
									<span className="ml-2 text-red-600">-&pound;1</span>
								</div>
							)}
							{selectedCode && (
								<div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
									{code_data.title} Discount ({code_data.off}%)
									<span className="ml-2 text-red-600">
										-&pound;{percent_price_to_deduct}
									</span>
								</div>
							)}
							<div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
								Total<span className="ml-2">&pound;{totalPrice}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CustomerPage>
	);
};

export default Checkout;
