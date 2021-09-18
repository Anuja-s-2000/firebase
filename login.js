const firebaseConfig = {
  apiKey: "AIzaSyCYsL62DAUP2B3Cvk2gZOEZ9BtOhbDVn0A",
  authDomain: "blog-b37fc.firebaseapp.com",
  databaseURL: "https://blog-b37fc-default-rtdb.firebaseio.com",
  projectId: "blog-b37fc",
  storageBucket: "blog-b37fc.appspot.com",
  messagingSenderId: "902970588239",
  appId: "1:902970588239:web:5cc1dd709bee9b4761be3a"
};

firebase.initializeApp(firebaseConfig);

 
    function signUp(){

        var name= document.getElementById("name");
        var email = document.getElementById("email1");
        var password = document.getElementById("password1");
        console.log(name.value,email.value,password);
        firebase.auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        const user = firebase.auth().currentUser;
        
        if (user != null) {
            user.updateProfile({
                displayName: name.value
            }).then(() => {
                window.location = 'blogs.html';
            }).catch((error) => {
              console.log(error);
            });
        } else {
          alert("Some error has occured");
        }  
      }
      ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("fail")
        alert("error1:",error);
      });
        
}

function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
       
        window.location = 'blogs.html';
       
      }
      ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        
      });
    }

  function googleSignIn(){
    base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function(result){
      console.log(result);
      alert("Success..Signed in with google");
      window.location = 'blogs.html';
    }).catch(function(err){
      console.log(err);
      alert(err);
    });
  }