var config = {
    apiKey: "AIzaSyB90dz8cu4Yk3lfkAcryi4B8PWM8lIlP8A",
    authDomain: "ux-community.firebaseapp.com",
    databaseURL: "https://ux-community.firebaseio.com",
    projectId: "ux-community",
    storageBucket: "ux-community.appspot.com",
    messagingSenderId: "1069742951667"
  };
  
  firebase.initializeApp(config);

let loginUser = document.getElementById('btnInicio')
let email =  document.getElementById('email')
let password = document.getElementById('password')

loginUser.addEventListener('click', function () {
    console.log('funciona bien ')
  const loginEmail = document.getElementById('email').value
  const loginPassword = document.getElementById('password').value

  firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
    .then(function (result) {
      let user = result.user
      console.log(user)
      //location.href = ('../views/profile.html');
    })
    .catch(function (error) {
      console.log(error)
    });

})








