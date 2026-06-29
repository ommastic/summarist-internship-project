import { auth, db } from "../../../firebase";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getPremiumStatus = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) return false;

 
  const subscriptionsRef = collection(db, "customers", userId, "subscriptions");
  const q = query(
    subscriptionsRef,
    where("status", "in", ["trialing", "active"])
  );

  const snapshot = await getDocs(q);

  return !snapshot.empty;
}
