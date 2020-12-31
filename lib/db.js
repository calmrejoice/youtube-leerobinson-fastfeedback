import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data });
}

export function createSite(data) {
  // Return id of doc ahead of time to do optimistic updating for local state
  const site = firestore.collection("sites").doc();
  site.set(data);
  return site;
}

export function createFeedback(data) {
  return firestore.collection("feedback").add(data);
}

export function deleteFeedback(id) {
  return firestore.collection("feedback").doc(id).delete();
}
