import React from "react";

import AdminPageContainer from "../../../components/AdminPage.container";

const Index = () => {
	return (
		<AdminPageContainer name={"Restaurants"}>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-white-300">
						<tr>
							<th scope="col" className="px-6 py-3">
								Title
							</th>
							<th scope="col" className="px-6 py-3">
								Description
							</th>
							<th scope="col" className="px-6 py-3">
								Address
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
								A Very Fancy Restaurant
							</th>
							<td className="px-6 py-4">Lorem ipsum</td>
							<td className="px-6 py-4">lorem ipsum</td>

							<td className="px-6 py-4">
								<a
									href="#"
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									View Details
								</a>
							</td>
						</tr>
						<tr className="bg-white border-b bg-gray-800">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								A Not Very Fancy Restaurant
							</th>
							<td className="px-6 py-4">Lorem ipsum</td>
							<td className="px-6 py-4">lorem ipsum</td>

							<td className="px-6 py-4">
								<a
									href="#"
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									View Details
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</AdminPageContainer>
	);
};

export default Index;
