import {
	collection,
	getDoc,
	doc,
	getDocs,
	query,
	where,
    addDoc,
	serverTimestamp,
	orderBy
} from "firebase/firestore";
import { fetchProfileData } from "./restuser.schema";
import { firestore } from "../firebase.config";

const orders_schema = {
	name: "orders",
	fields: {
		uid:"uid",
		created_at:"created_at"
	},
};

export const insert_order_data = async (data) => {
	const collRef = collection(firestore, orders_schema.name)
    const docRef = await addDoc(collRef, {...data, created_at: serverTimestamp()});

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


export const fetch_orders_by_user_uid = async (uid) => {
	
	const ordersRef	= collection(firestore, orders_schema.name)
	const q = query(ordersRef, where(orders_schema.fields.uid, "==", uid), orderBy(orders_schema.fields.created_at, "desc"));

	const querySnapshot = await getDocs(q);

	const da = [];

	for (const doc of querySnapshot.docs) {
		const obj = { ...doc.data(), doc_id: doc.id }

		obj.rest_details = await fetchProfileData(obj.rest_doc_id)
		da.push(obj);
	}

	return da;
};

export const fetch_single_order = async (doc_id) => {
	const docRef = doc(firestore, orders_schema.name, doc_id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return {...docSnap.data(), doc_id: docSnap.id}
	} else {
		return null;
	}
};
