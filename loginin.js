(function (){

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCXSgERUVBdBc_57tYO2-tZAG8mhBPvOOk",
    authDomain: "courso-ae357.firebaseapp.com",
    databaseURL: "https://courso-ae357-default-rtdb.firebaseio.com",
    projectId: "courso-ae357",
    storageBucket: "courso-ae357.appspot.com",
    messagingSenderId: "812054298960",
    appId: "1:812054298960:web:b2bb643599189abe9c6c55"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get elements
  const email    = document.getElementById('email');
  const password = document.getElementById('password');
  const login    = document.getElementById('login');
  const signup   = document.getElementById('signup');
  const logout   = document.getElementById('logout');

  //login
  login.addEventListener('click', e => {
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch( e => console.log(e.message));
    });

// signup
signup.addEventListener('click', e => {
    //TODO: check for real email
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch( e => console.log(e.message));
});

// Logout
logout.addEventListener('click', e => {
    firebase.auth().signOut();
});

// login state
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
        logout.style.display = 'inLine';
        login.style.display = 'none';
        signup.style.display = 'none';
    }
    else{
        console.log('User is not logged in');
        logout.style.display = ' none';
        login.style.display = 'inLine';
        signup.style.display = 'inLine';
    }

});
}());