import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestPageContainer from "../../components/RestPage.container";
import { fetchAllFoodItemsData } from "../../schemas/food_items.schema";
import { useStateValue } from "../../context/StateProvider";

const FoodList = () => {
	const [isLoading, setisLoading] = useState(false);
	const [items, setitems] = useState([]);

	const [{ restUser }] = useStateValue();

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);
				const data = await fetchAllFoodItemsData(restUser.uid);
				setitems(data);
			} catch (error) {
			} finally {
				setisLoading(false);
			}
		})();
	}, []);

	return (
		<RestPageContainer name="Food List">
			<div className="pt-[25px] px-[25px]">
				<h1 className="text-xl my-5">Food Items</h1>
				{isLoading ? <center>Loading...</center> : ""}
				{items.length > 0 ? (
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-orange-200">
								<tr>
									<th scope="col" className="px-6 py-3">
										Name
									</th>
									<th scope="col" className="px-6 py-3">
										Veg/Non Veg
									</th>
									<th scope="col" className="px-6 py-3">
										Category
									</th>
									<th scope="col" className="px-6 py-3">
										Price
									</th>
									<th scope="col" className="px-6 py-3">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{items.map((v, i) => (
									<tr key={i} className="bg-white border-b bg-gray-800">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											{v.title}
										</th>
										<td className="px-6 py-4">{v.isVeg ? "Veg" : "Nonveg"}</td>
										<td className="px-6 py-4">{v.category}</td>
										<td className="px-6 py-4">&pound; {v.price}</td>
										<td className="px-6 py-4">
											<Link
												to={`/rest-food-item/${v.doc_id}/edit`}
												className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
												Edit
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<center className="w-full p-2 rounded-lg text-center text-lg font-semibold bg-emerald-400 text-emerald-800">
						NO DATA
					</center>
				)}
			</div>
		</RestPageContainer>
	);
};

export default FoodList;
