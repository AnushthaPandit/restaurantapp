import {
	collection,
	getDoc,
	doc,
	getDocs,
	orderBy,
	query,
	setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

const restusers_schema = {
	name: "restusers",
	fields: {},
};

export const saveProfileData = async (data, uid) => {
	await setDoc(doc(firestore, restusers_schema.name, uid), data, {
		merge: true,
	});
};

export const fetchProfileData = async (uid) => {
	const docRef = doc(firestore, restusers_schema.name, uid);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		return null;
	}
};
