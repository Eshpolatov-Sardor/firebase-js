let loginBtn = document.querySelector('#login-btn');


    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword ,signOut  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDxx09gY_aX1UDVlt3NdO16wgM1ZMxF0uM",
    authDomain: "lug-at-98136.firebaseapp.com",
    projectId: "lug-at-98136",
    storageBucket: "lug-at-98136.appspot.com",
    messagingSenderId: "506190267427",
    appId: "1:506190267427:web:9440463e28da0ad3461d96",
    measurementId: "G-EJLDQZN935"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
    loginBtn.addEventListener("click", () => {
      let emailInput = document.querySelector("#username").value;
      let passwordInput = document.querySelector("#password").value;
      createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert(" Siz ro'yxatdan o'tdinggiz: Kirmoqchimisiz");
        window.location.href="./dashboard.html"
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
    });
  