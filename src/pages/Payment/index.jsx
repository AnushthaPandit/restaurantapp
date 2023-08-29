import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Loader from "../../components/Loader";

import { useStateValue } from "../../context/StateProvider";
import {
	fetch_checkout_by_id,
	delete_checkout,
} from "../../schemas/checkout.schema";
import { insert_order_data } from "../../schemas/orders.schema";

const Payment = () => {
	const [{ user }] = useStateValue();
	const { checkout_id } = useParams();
	const navigate = useNavigate();

	const [isLoading, setisLoading] = useState(false);
	const [details, setdetails] = useState(null);

	const handlePay = async (e) => {
		try {
			e.preventDefault();
			setisLoading(true);
			const card_name = e.currentTarget.name_card.value.trim();
			const card_number = e.currentTarget.number_card.value;

			var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
			var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
			var amexpRegEx = /^(?:3[47][0-9]{13})$/;
			var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
			var isValid = false;

			if (visaRegEx.test(card_number)) {
				isValid = true;
			} else if (mastercardRegEx.test(card_number)) {
				isValid = true;
			} else if (amexpRegEx.test(card_number)) {
				isValid = true;
			} else if (discovRegEx.test(card_number)) {
				isValid = true;
			}

			if (!isValid) {
				return alert("Invalid card number!!");
			}
			await insert_order_data({ ...details, card_name, card_number });
			await delete_checkout(checkout_id);
			alert("Your order has been placed!!");
			navigate("/restaurant/" + details.rest_doc_id);
		} catch (error) {
			console.log(error);
			alert("Somethig went wrong!!");
		} finally {
			setisLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);
				const data = await fetch_checkout_by_id(checkout_id);
				setdetails(data);
			} catch (error) {
				alert("Something went wrong!");
			} finally {
				setisLoading(false);
			}
		})();
	}, [checkout_id]);

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

	return (
		<div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
			<form
				onSubmit={handlePay}
				class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
				style={{ maxWidth: "600px" }}>
				<div class="w-full pt-1 pb-5">
					<div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
						<i class="mdi mdi-credit-card-outline text-3xl"></i>
					</div>
				</div>
				<div class="mb-10">
					<h1 class="text-center font-bold text-xl uppercase">
						Secure payment info
					</h1>
				</div>
				<div class="mb-3 flex -mx-2">
					<div class="px-2">
						<label for="type1" class="flex items-center cursor-pointer">
							<input
								type="radio"
								class="form-radio h-5 w-5 text-indigo-500"
								name="type"
								id="type1"
								checked
							/>
							<img
								src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
								class="h-8 ml-3"
							/>
						</label>
					</div>
					<div class="px-2">
						<label for="type2" class="flex items-center cursor-pointer">
							<input
								type="radio"
								class="form-radio h-5 w-5 text-indigo-500"
								name="type"
								id="type2"
							/>
							<img
								src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
								class="h-8 ml-3"
							/>
						</label>
					</div>
				</div>
				<div class="mb-3">
					<label class="font-bold text-sm mb-2 ml-1">Name on card</label>
					<div>
						<input
							class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
							placeholder="John Smith"
							name="name_card"
							type="text"
							required
						/>
					</div>
				</div>
				<div class="mb-3">
					<label class="font-bold text-sm mb-2 ml-1">Card number</label>
					<div>
						<input
							class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
							placeholder="0000 0000 0000 0000"
							type="number"
							name="number_card"
							required
						/>
					</div>
				</div>
				<div class="mb-3 -mx-2 flex items-end">
					<div class="px-2 w-1/2">
						<label class="font-bold text-sm mb-2 ml-1">Expiration date</label>
						<div>
							<select
								name="month"
								class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
								required>
								<option value="01">01 - January</option>
								<option value="02">02 - February</option>
								<option value="03">03 - March</option>
								<option value="04">04 - April</option>
								<option value="05">05 - May</option>
								<option value="06">06 - June</option>
								<option value="07">07 - July</option>
								<option value="08">08 - August</option>
								<option value="09">09 - September</option>
								<option value="10">10 - October</option>
								<option value="11">11 - November</option>
								<option value="12">12 - December</option>
							</select>
						</div>
					</div>
					<div class="px-2 w-1/2">
						<select
							name="year"
							class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
							required>
							<option value="2023">2023</option>
							<option value="2024">2024</option>
							<option value="2025">2025</option>
							<option value="2026">2026</option>
							<option value="2027">2027</option>
							<option value="2028">2028</option>
							<option value="2029">2029</option>
						</select>
					</div>
				</div>
				<div class="mb-10">
					<label class="font-bold text-sm mb-2 ml-1">Security code</label>
					<div>
						<input
							class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
							placeholder="000"
							type="text"
							maxLength={3}
							minLength={3}
							required
						/>
					</div>
				</div>
				<div>
					<button
						type="submit"
						class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
						<i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
					</button>
				</div>
			</form>
		</div>
	);
};

export default Payment;
