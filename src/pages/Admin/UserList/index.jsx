import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AdminPageContainer from "../../../components/AdminPage.container";
import Loader from "../../../components/Loader";

import { fetch_all_users } from "../../../schemas/users.schema";

const Index = () => {
	const [isLoading, setisLoading] = useState(false);
	const [users, setusers] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);

				const data = await fetch_all_users();
				console.log(data);

				setusers(data);
			} catch (error) {
				console.log(error);
			} finally {
				setisLoading(false);
			}
		})();
	}, []);

	if (isLoading) {
		return (
			<center>
				<Loader />
			</center>
		);
	}

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
								Order Details
							</th>
						</tr>
					</thead>
					<tbody>
						{users.map((v, i) => (
							<tr key={i} className="bg-white border-b bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{v.doc_id}
								</th>
								<td className="px-6 py-4">{v.displayName}</td>

								<td className="px-6 py-4">
									<Link
										to={"/admin-user-order-list/"+v.doc_id}
										className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
										View Orders
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</AdminPageContainer>
	);
};

export default Index;
