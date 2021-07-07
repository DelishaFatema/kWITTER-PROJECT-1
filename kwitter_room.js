// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA_fTBO135mCTQDNdn3eBF4SoAMJ6FyA7s",
    authDomain: "kwitter-project-a8441.firebaseapp.com",
    projectId: "kwitter-project-a8441",
    storageBucket: "kwitter-project-a8441.appspot.com",
    messagingSenderId: "210577591251",
    appId: "1:210577591251:web:c1e861783724b8e30c3d26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();