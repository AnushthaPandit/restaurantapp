import {
	collection,
	getDoc,
	doc,
	getDocs,
	orderBy,
	query,
	setDoc,
	where,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

const food_items_schema = {
	name: "food_items",
	fields: {
		uid: "uid",
	},
};

export const fetchAllFoodItemsData = async (uid) => {
	const q = query(
		collection(firestore, food_items_schema.name),
		where(food_items_schema.fields.uid, "==", uid)
	);

	const querySnapshot = await getDocs(q);

	const da = [];
	querySnapshot.forEach((doc) => {
		da.push(doc.data());
	});

	return da;
};
