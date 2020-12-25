import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      {
        type: "service_account",
        project_id: "leerobinson-fastfeedback",
        private_key_id: "eebf39077cc16a6a7208590c7e382aa5efedad55",
        private_key: process.env.FIREBASE_PRIVATE_KEY,
        client_email:
          "firebase-adminsdk-6fany@leerobinson-fastfeedback.iam.gserviceaccount.com",
        client_id: "105751853976591258611",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6fany%40leerobinson-fastfeedback.iam.gserviceaccount.com",
      }
      // client_email: process.env.FIREBASE_CLIENT_EMAIL,
      // private_key: process.env.FIREBASE_PRIVATE_KEY,
      // project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    ),
    databaseURL: "https://leerobinson-fastfeedback.firebaseio.com",
  });
}

export default admin.firestore();
