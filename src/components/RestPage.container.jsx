import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import RestHeader from "./RestHeader";

const RestPage = ({ children }) => {
	return (
		<div className="flex">
			<div className="basis-[15%] h-[100vh]">
				<Sidebar />
			</div>
			<div className="basis-[85%] border">
				<RestHeader />
				{children}
				<div>
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default RestPage;
