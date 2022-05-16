import admin, {firestore} from "firebase-admin";

admin.initializeApp();
const db: firestore.Firestore = admin.firestore();

export {admin, db};
