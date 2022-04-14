
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD8lu7Jcpl-Ke_hOQdQboOjja5jtTmFBp8",
      authDomain: "my-chat-fa97e.firebaseapp.com",
      databaseURL: "https://my-chat-fa97e-default-rtdb.firebaseio.com",
      projectId: "my-chat-fa97e",
      storageBucket: "my-chat-fa97e.appspot.com",
      messagingSenderId: "19149191852",
      appId: "1:19149191852:web:2410a4f409ac7d83c17d09",
      measurementId: "G-CQ2BQNH2WF"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
