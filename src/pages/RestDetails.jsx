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

const RestDetails = () => {
	const [{ cartShow }] = useStateValue();
	const { id } = useParams(); //rest doc id
	const [isLoading, setisLoading] = useState(false);
	const [foodItems, setfoodItems] = useState([]);
	const [restDetails, setrestDetails] = useState();
	const [cartItems, setcartItems] = useState([])

	const addToCart = (item) =>{
		const itemIndex = cartItems.findIndex(v =>  v.doc_id === item.doc_id);
		if (itemIndex > -1) {
			setcartItems(prev =>{
				prev[itemIndex].qty = prev[itemIndex].qty + 1
				return [...prev]
			})
		}else{
			setcartItems(prev => [...prev, item])
		}
	}

	const removeFromCart = (item) =>{
		setcartItems(prev => {
			const itemIndex = prev.findIndex(v =>  v.doc_id === item.doc_id);
			if (prev[itemIndex].qty === 1) {
				return prev.filter(v => v.doc_id !== item.doc_id)
			}

			prev[itemIndex].qty = prev[itemIndex].qty -1;
			return [...prev]
		})
	}

	const emptyCart = () =>{
		setcartItems([])
	}

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);

				const data = await fetchAllFoodItemsData(id);
				const profData = await fetchProfileData(id);

				setrestDetails(profData);
				setfoodItems(data);
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

				{/* <section className="w-full my-6">
				<div className="w-full flex items-center justify-between">
					<p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
						Our fresh & healthy fruits
					</p>

					<div className="hidden md:flex gap-3 items-center">
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
					</div>
				</div>
				<RowContainer
					scrollValue={scrollValue}
					flag={true}
					data={foodItems?.filter((n) => n.category === "fruits")}
				/>
			</section> */}

				<MenuContainer addToCart={addToCart} foodItems={foodItems} />

				{cartShow && <CartContainer addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} emptyCart={emptyCart} />}
			</div>
		</CustomerPage>
	);
};

export default RestDetails;
