export const fetchUser = () => {
	const userInfo =
		localStorage.getItem("user") !== "undefined"
			? JSON.parse(localStorage.getItem("user"))
			: localStorage.clear();

	return userInfo;
};

export const fetchRestUser = () => {
	const userInfo =
		localStorage.getItem("city:restuser") !== "undefined"
			? JSON.parse(localStorage.getItem("city:restuser"))
			: null;

	return userInfo;
};

export const setRestUser = (data = {}) => {
	localStorage.setItem("city:restuser", JSON.stringify(data));
};
export const delRestUser = () => {
	localStorage.removeItem("city:restuser");
};

export const fetchCart = () => {
	const cartInfo =
		localStorage.getItem("cartItems") !== "undefined"
			? JSON.parse(localStorage.getItem("cartItems"))
			: localStorage.clear();

	return cartInfo ? cartInfo : [];
};
