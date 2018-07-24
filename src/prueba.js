firebase.initializeApp({
    apiKey: 'AIzaSyCDQFw022mnaArIkSeD7H-Q2V_zeoyX9YE',
    authDomain: 'meeus-87217.firebaseapp.com',
    projectId: 'meeus-87217'
});
  
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
console.log(db);


//agregar documentos

function guardar(){
    let usuario = document.getElementById("usuario").value;
    let publicacion = document.getElementById("post").value;
    
    db.collection("users").add({
        usuario: usuario,
        post: publicacion
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        let usuario = document.getElementById("usuario").value="";
        let publicacion = document.getElementById("post").value="";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

console.log(guardar);
