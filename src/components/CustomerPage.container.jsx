import React from "react";

import Header from "./Header";

const CustomerPage = ({ children }) => {
	return (
		<div>
			<Header />
			<main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
				{children}
			</main>
		</div>
	);
};

export default CustomerPage;
