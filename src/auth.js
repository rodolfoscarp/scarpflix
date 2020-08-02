import firebase from "./libs/firebase";

const auth = new Promise((resolve, reject) => {
  firebase
    .auth()
    .signInAnonymously()
    .then((user) => {
      resolve(user);
    })
    .catch((error) => {
      reject({ error: error.message });
    });
});

export default auth;
