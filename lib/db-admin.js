import { compareDesc } from "date-fns";

import firebase from "./firebase-admin";

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await firebase
      .collection("feedback")
      .where("siteId", "==", siteId)
      .orderBy("createdAt", "desc")
      .get();

    const feedback = [];

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    return { feedback };
  } catch (err) {
    return { err };
  }
}

export async function getAllSites() {
  try {
    const snapshot = await firebase
      .collection("sites")
      .orderBy("createdAt", "desc")
      .get();
    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (err) {
    return { err };
  }
}
