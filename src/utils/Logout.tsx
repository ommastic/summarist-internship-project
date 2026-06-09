import { signOut } from "firebase/auth";
import { auth } from "../firebase.ts";

export const logout =
  async () => {
    await signOut(auth);
  };
