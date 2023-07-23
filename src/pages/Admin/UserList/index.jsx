import React from "react";

import AdminPageContainer from "../../../components/AdminPage.container";
import { Link } from "react-router-dom";

const Index = () => {
	return (
		<AdminPageContainer name={"Users"}>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-white-300">
						<tr>
							<th scope="col" className="px-6 py-3">
								ID
							</th>
							<th scope="col" className="px-6 py-3">
								Full Name
							</th>
							<th scope="col" className="px-6 py-3">
								Pin Code
							</th>
							<th scope="col" className="px-6 py-3">
								Order Details
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b bg-gray-800">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								1
							</th>
							<td className="px-6 py-4">Lorem ipsum</td>
							<td className="px-6 py-4">400</td>

							<td className="px-6 py-4">
								<Link
									to="/admin-user-order-list/12"
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									View Orders
								</Link>
							</td>
						</tr>
						<tr className="bg-white border-b bg-gray-800">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								1
							</th>
							<td className="px-6 py-4">Lorem ipsum</td>
							<td className="px-6 py-4">400</td>

							<td className="px-6 py-4">
								<Link
									to="/admin-user-order-list/13"
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									View Orders
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</AdminPageContainer>
	);
};

export default Index;
