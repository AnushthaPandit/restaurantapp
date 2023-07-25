import { Navigate } from "react-router-dom";

import { fetchUser, fetchRestUser } from "../utils/fetchLocalStorageData";

function PrivateRoute({ children, role = "" }) {
	let roleData;
	let loginRoute = "/";

	switch (role) {
		case "user":
			roleData = fetchUser();
			loginRoute = "/";
			break;

		case "restUser":
			roleData = fetchRestUser();
			loginRoute = "/restaurant-login";
			break;
		default:
			break;
	}

	console.log({ roleData, loginRoute });

	return roleData ? <>{children}</> : <Navigate to={loginRoute} />;
}

export default PrivateRoute;
