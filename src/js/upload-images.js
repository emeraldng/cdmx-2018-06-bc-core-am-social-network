window.onload = inicializar;
var fichero;
var storageRef;

function inicializar() {
  fichero = document.getElementById("fichero");
  fichero.addEventListener("change", subirImagenFirebase, false);

  storageRef = firebase.storage().ref();

  imagenesFBref = firebase.database().ref().child("imagenesFB");
  

  mostrarImagenesDeFirebase();
 
}


function mostrarImagenesDeFirebase() {
  imagenesFBRef.on("value", function (snapshot) {
    var datos = snapshot.val();
    var result = "";
    for (var key in datos) {
      result += '<imag src"' + datos[key].url + '"/>';
    }
    document.getElementById("imagenes-de-firebase").innerHTML = result;
  })
}

function subirImagenAFirebase(){
    var imagenASubir = fichero.files[0];
  
    var uploadTask = storageRef.child('imagenes/' + imagenASubir.name).put(imagenASubir);
  
    uploadTask.on('state_changed',
    function(snapshot){
        
    }
}
      
