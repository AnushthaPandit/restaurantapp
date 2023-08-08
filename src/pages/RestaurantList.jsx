import React, { useEffect, useState } from "react";

import CartContainer from "../components/CartContainer";
import HotelList from "../components/HotelList";
import CustomerPage from "../components/CustomerPage.container";

import { useStateValue } from "../context/StateProvider";
import { fetchAllRestData } from "../schemas/restuser.schema";
import Loader from "../components/Loader";

const MainContainer = () => {
	const [{ cartShow }] = useStateValue();
	const [isLoading, setisLoading] = useState(false);
	const [restlist, setrestlist] = useState([]);
	const [filteredList, setfilteredList] = useState([]);
	const [filter, setfilter] = useState("both");

	const handleChange = (e) => {
		setfilter(e.target.value);
	};

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);
				const data = await fetchAllRestData();
				setrestlist(data);
				setfilteredList(data);
			} catch (error) {
				console.log(error);
				alert("Something went wrong!");
			} finally {
				setisLoading(false);
			}
		})();
	}, []);

	useEffect(() => {
		if (filter === "veg") {
			setfilteredList(restlist.filter((v) => v.veg));
			return;
		}
		if (filter === "nonveg") {
			setfilteredList(restlist.filter((v) => v.nonveg));
			return;
		}
		if (filter === "both") {
			setfilteredList(restlist.filter((v) => v.nonveg || v.veg));
			return;
		}
	}, [filter, restlist]);

	return (
		<CustomerPage>
			<div className="w-full h-auto flex flex-col items-center justify-center min-h-full">
				<section class="showcase-area border w-[100%]" id="showcase">
					<div class="showcase-container">
						<div>
							<h1 class="text-5xl text-center mb-2" id="home">
								Eat Right Food
							</h1>
							<p className="text-2xl text-center">
								Eat Healty, it is good for our health.
							</p>
						</div>
						<a
							href="#rest"
							class="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
							Find Restaurants
						</a>
					</div>
				</section>
				<section id="rest" className="w-full my-6">
					{isLoading ? <Loader /> : null}
					<div className="w-full flex items-center justify-between">
						<p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
							Top restaurant
						</p>

						{/* <div className="hidden md:flex gap-3 items-center">
						<motion.div
							whileTap={{ scale: 0.75 }}
							className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
							onClick={() => setScrollValue(-200)}>
							<MdChevronLeft className="text-lg text-white" />
						</motion.div>
						<motion.div
							whileTap={{ scale: 0.75 }}
							className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
							onClick={() => setScrollValue(200)}>
							<MdChevronRight className="text-lg text-white" />
						</motion.div>
					</div> */}
					</div>
					<div style={{ marginTop: "2rem" }}>
						<p>Filters:</p>
						<select onChange={handleChange} name="filter">
							<option value={"veg"} selected={filter === "veg"}>
								Veg
							</option>
							<option value={"nonveg"} selected={filter === "nonveg"}>
								Non Veg
							</option>
							<option value={"both"} selected={filter === "both"}>
								Both
							</option>
						</select>
					</div>
					<HotelList list={filteredList} />
				</section>

				{cartShow && <CartContainer />}
			</div>
		</CustomerPage>
	);
};

export default MainContainer;
