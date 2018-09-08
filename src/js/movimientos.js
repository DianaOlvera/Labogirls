
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyCoZYLKMfBv8NWc5J4eprfuzWeoRHrCYcA",
    authDomain: "payqrdash.firebaseapp.com",
    projectId: "payqrdash", 
  });

  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();


//   //guardar datos
// sendComent.addEventListener("click", e => {
//     //crear variable para cada elemento
//     //crear variables para cada elemento 
//     let numVenta= document.getElementById('numVenta').value;
//     let motivo= document.getElementById('motivo').value;
//     let celular = document.getElementById('cel').value;
//     let importe = document.getElementById('importe').value;
//     let operacion = document.getElementById('op').value
//     let digitos =  document.getElementById('digitos').value;
//     let string = "dado por el banco";
//     //agregar documentos
//       //agregar documento y id
//       db.collection(datos).add({
//         venta: numVenta,
//         pago: motivo,
//         celular: string,
//         importe: importe,
//         fecha: operacion,
//         digitos: string,
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
        
//         document.getElementById('numVenta').value=' ';
//         document.getElementById('motivo').value=' ';
//         document.getElementById('string').value=' ';
//         document.getElementById('importe').value = ' ';
//         document.getElementById('operacion').value=' ';
//         document.getElementById('string').value=' ';

        
    
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
//     });

//     let tabla = document.getElementById("tabla");
// //leer documentos
// db.collection("users").onSnapshot((querySnapshot) => {
// 	//limpiar la tabla
//     	tabla.innerHTML = " ";
//     	querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().numventa}`);
//         tabla. innerHTML += ` 
//         <tr>
//       <th scope="row">${doc.id}</th>
//       <th scope="col">${doc.data().pago}</th>
//       <th scope="col">${doc.data().celular}</th>
//       <th scope="col">${doc.data().fecha}</th>
//       <th scope="col">${doc.data().importe}</th>
//       <th scope="col">${doc.data().digitos}</th>
//       <th scope="col"><button class = "btn btn-danger" onclick = "enviarRecibo('${doc.id}')">Enviar Recibo</button></th>
//     </tr>`
//     });
// });



  // prueba 
 console.log("todo va bien");
 
 let myform = $("form#myform");
myform.submit(function(event){
  event.preventDefault();

  // credenciales de servicio emailjs
  let service_id = "default_service";
  let template_id = "template_bPMxch99";
  //evento del boton 
  myform.find("button").text("Enviando...");
  emailjs.sendForm(service_id,template_id,"myform")
    .then(function(){ 
      alert("La notificación se envio correctamente!");
       myform.find("button").text("Enviado");
    }, function(err) {
       alert("Hubo un error vuelve a intentar!");
       myform.find("button").text("No pudo ser enviado");

    });
  return false;
});
