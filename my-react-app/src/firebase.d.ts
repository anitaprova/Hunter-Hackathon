declare module "./firebase" {
  import { Firestore } from "firebase/firestore";

  export const db: Firestore;
	export const auth: any;
}
