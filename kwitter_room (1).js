
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyCvh0T3FzbuLffOYYmfNVfbmloQp9SlFYU",
      authDomain: "kwitter-1d6ae.firebaseapp.com",
      projectId: "kwitter-1d6ae",
      storageBucket: "kwitter-1d6ae.appspot.com",
      messagingSenderId: "534653559765",
      appId: "1:534653559765:web:c80c667a447f0674de535c"
    };

    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
     function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").chiild(room_name).update({purpose: "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html");
     }
function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //Final del códigoç
      
      });});}
getData();
function logoout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}
