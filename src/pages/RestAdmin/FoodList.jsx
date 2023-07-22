import React from "react";

import RestPageContainer from "../../components/RestPage.container";

const FoodList = () => {
	return (
		<RestPageContainer name="Food List">
			<div className="pt-[25px] px-[25px]">
				<h1 className="text-xl my-5">Food Items</h1>
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
							<tr className="bg-white border-b bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Ice Cream
								</th>
								<td className="px-6 py-4">Veg</td>
								<td className="px-6 py-4">icecreams</td>
								<td className="px-6 py-4">&#8377; 200</td>
								<td className="px-6 py-4">
									<a
										href="#"
										className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
										Edit
									</a>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Samosa
								</th>
								<td className="px-6 py-4">Veg</td>
								<td className="px-6 py-4">Snack</td>
								<td className="px-6 py-4">&#8377; 15</td>
								<td className="px-6 py-4">
									<a
										href="#"
										className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
										Edit
									</a>
								</td>
							</tr>
							<tr className="bg-white dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Pani Puri
								</th>
								<td className="px-6 py-4">Veg</td>
								<td className="px-6 py-4">Snack</td>
								<td className="px-6 py-4">&#8377; 15</td>
								<td className="px-6 py-4">
									<a
										href="#"
										className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
										Edit
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</RestPageContainer>
	);
};

export default FoodList;
