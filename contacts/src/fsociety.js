import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCxK0g1oqbRmlXa8pQXSkyMj9K8hbG_LBU",
    authDomain: "my-contacts-98b10.firebaseapp.com",
    databaseURL: "https://my-contacts-98b10.firebaseio.com",
    projectId: "my-contacts-98b10",
    storageBucket: "my-contacts-98b10.appspot.com",
    messagingSenderId: "673782336769"
};
firebase.initializeApp(config);

var database = firebase.database();

export var User = {};
export function auth () {
  return new Promise(function (resolve, reject) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        User.user = result.user;
        resolve(User);
        
        setTimeout(function () {
         database.ref('contacts/' + User.user.uid)
          .once('value').then(function(contacts) {
           console.log(contacts.val());
           }); 
        }, 2000);

        database.ref('contacts/' + User.user.uid)
         .on('value', function(contacts) {
          console.log(contacts.val());
         });
      })
      .catch(function (e) {
        reject(e);
      });
  });
}

firebase.auth()
  .onAuthStateChanged(function(user) {
    if (user) {
      User.user = user;
      console.log(user);
    }
  });

export default database;