import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      {
        type: "service_account",
        project_id: "leerobinson-fastfeedback",
        private_key_id: "eebf39077cc16a6a7208590c7e382aa5efedad55",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/WYiScKqoV9Tp\nBjgU8FBq0iJ6MxVzg8UCNmaHKSDlIZiFrLxTo50b36fjH6ryCUVjMrs23/wYwzYN\nXIcQjn81s94uKVe8SS1OQMKXQH+zEzOk8X6H1ZhHiGQzjuLKxdS7jfvkT+xX6JUT\nKZlPrksaSL/Gae+f4bCsBdZxXrounLxS7k/M57v/1JOSuTVGV8+DcncTVPyZ8DKu\n+ZTszD4CJQdY+7PoS1hGhcbdaTU7EJPWvPW53UHhnJSLUzlWaBP3HC6XLjvLQtRn\nwzVbUkiA7C/vIZCiyKgVkhgMOJSiC1EKRqGixCvFGgCEOAfo66RUASdb0p0fXNxq\nIHIE/zdtAgMBAAECggEAHNsIoGTDJ43POrDIZkfzKJi1wE3Rz1Cwteu0PG+0WTle\nwdHRuJ80ww5QSAzvf35sa1AsMVNHtghCL3OjnpiOkG+mcrmjVG6ImYNklOCSIVQk\n9pvAZAWO6EKmMaw7gS6iLQJ1WPHAh2U4jeI5D24OP1F3MhmpnCext89Njl0loH+Z\nd1HvAaFE/BSc+qal0uRc8eaMkhzzUCfC8HcY5PvYHlqqGbG+/c1OCT1qEvUU5ZNj\ntdCaLSvnTVolQZTdyhVxzuU7J315lxDQ8SRDRVa9VKqf5y/qmpe1tAnyDxEfd2+4\n0eyc7MV+Sb1/bagiWHYfOAWM+osPugvWmuKd9XH21QKBgQDr2/rqRoHSPhe9UMd7\nCm/H3r9uInffjFusdIHnc0MZ/7LAFFM3eb9wUESu9wA5O1CnHiEbYxJMmxqMHcZ1\nn5roFzKaq2eoAjA1cIODnug+tz6Xgw+M0bIhv0eM19zyUDjJhdczS4LuJcotbaGu\nFw/7ItpoBGUv0BvXRRgqNAwmewKBgQDPsIyAS05Z7xQTsVztj1XWUSzRpYYr+HD7\nnX50dcK4dHOP0DpUFihWwtnV6lFCzQzMLnxNnRDVEj/232qj++5AnTylzSRYJIAC\naKWp+bNaO3IOLq9Nwb7IjUQ/Lb95//1dy/FC1vI1e5I1snu48kAsT0G2ZwvD89pz\n9xMWDgfpNwKBgCw+mfU0wMm1yDJFYwZb0NhHmtWINcCDzfat7GiEoMPRybBqn6m6\ndwUUqa3AvBQAYoLXDhLbJOWl+vbp5v7Nr/t1zpJhMRK9Rlnf/2vDdYG+UkmN1m7u\nL2JRRZTQMaxrDBwRtWrz8V3HTQP0mu3TebX8tcfpeyna+j4Jwhy4osbdAoGBAMgR\nbod4A7Ym1NRTmw1NcobOE7qxFRrubQg1o0dU2YsOwvPaxxWRcrKBaY7j9fu/w4A9\nl4i8sSZQOkX62qO1YMHltjKR91zhbF7lqBChdeCKO0jmOAFTjhFr5D5oN3ey3cOp\nXnPg09ope6M2mHCFDMSiZM7tXSwakGn9rOkmAwDpAoGAfOD/3pnxpZIYjyKQxjRx\n6+WgoxVpmm573TA2Ko3IqSToZfndYyhuzZiwmtumlZcjeL60pVJqAyj3FNdXMsJK\nPVe8ePtfIPm73liGyrQ7zk47YaozKMZmW6MJ702BfhF2QDQzlkjGCbgShfE7ZL4a\n6BeP5ixN2PbhAtUIQWJj9Hw=\n-----END PRIVATE KEY-----\n",
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
