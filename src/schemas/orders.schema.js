import {
	collection,
	getDoc,
	doc,
	getDocs,
    addDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

const orders_schema = {
	name: "orders",
	fields: {},
};

export const insert_order_data = async (data) => {
	const collRef = collection(firestore, orders_schema.name)
    const docRef = await addDoc(collRef, data);

    return docRef.id;
};


export const fetch_checkout_by_id = async (doc_id) => {
	const docRef = doc(firestore, orders_schema.name, doc_id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		return null;
	}
};


export const fetchAllRestData = async () => {
	const querySnapshot = await getDocs(
		collection(firestore, orders_schema.name)
	);

	const da = [];
	querySnapshot.forEach((doc) => {
		da.push({ ...doc.data(), doc_id: doc.id });
	});

	return da;
};

export const fetchProfileData = async (uid) => {
	const docRef = doc(firestore, orders_schema.name, uid);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		return null;
	}
};
