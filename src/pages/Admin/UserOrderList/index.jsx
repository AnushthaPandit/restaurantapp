import React from "react";

import AdminPageContainer from "../../../components/AdminPage.container";
import { Link } from "react-router-dom";

const Index = () => {
	return (
		<AdminPageContainer name={"User Order List"}>
			<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
						John Doe's Orders
						<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
							List of orders placed by john doe
						</p>
					</caption>
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="px-6 py-3">
								Restaurant
							</th>
							<th scope="col" class="px-6 py-3">
								Total Item
							</th>
							<th scope="col" class="px-6 py-3">
								Price
							</th>
							<th scope="col" class="px-6 py-3">
								Address
							</th>
							<th scope="col" class="px-6 py-3">
								<span class="sr-only">View</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								A Fancy Restaurant
							</th>
							<td class="px-6 py-4">7</td>
							<td class="px-6 py-4">299</td>
							<td class="px-6 py-4">Ipsum</td>
							<td class="px-6 py-4 text-right">
								<Link
									to="/order-details/13"
									class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									View
								</Link>
							</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								A Very Fancy Restaurant
							</th>
							<td class="px-6 py-4">5</td>
							<td class="px-6 py-4">199</td>
							<td class="px-6 py-4">Lorem</td>
							<td class="px-6 py-4 text-right">
								<Link
									to="/order-details/12"
									class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									View
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
