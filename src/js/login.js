// Initialize Firebase
let config = {
    apiKey: "AIzaSyCDQFw022mnaArIkSeD7H-Q2V_zeoyX9YE",
    authDomain: "meeus-87217.firebaseapp.com",
    databaseURL: "https://meeus-87217.firebaseio.com",
    projectId: "meeus-87217",
    storageBucket: "",
    messagingSenderId: "659264664694"
  };
  firebase.initializeApp(config);

  // Create User
  /*firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
  });

  // Sign In
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
  });
  */