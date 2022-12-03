//TUS ANLACES DE FIREBASE
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send () 
{
      msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
            name : user_name,
            message: msg,
            like: 0
});

document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
nombre = message_data['name'];
 message = message_data['message']; 
 like = message_data['like'];
 name_with_tag = "<h4>" + nombre + "<img class= 'user_tick' src='tick.png'> </h4>";
 message_with_tag = "<h4 class='mesage_h4'>" + message + "</h4>";
 like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + likee + "onclick= 'updateLike(this.id)'>"
 row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;
//Termina código
      } });  }); }
getData();
