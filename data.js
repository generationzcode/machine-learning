var lm,tm,st;
function dataSend(){
    lm =parseInt(prompt("number of orders last month"));
    tm = parseInt(prompt("number of orders this month"));
    st = parseInt(prompt("present rating"));
    sendData();
    document.body.innerHTML="<button onclick='dataSend()'>enter more data?</button>";
} 
var config = {
    apiKey: "AIzaSyBVxOLTli6ellP4gsRFnBKIVfyMn8d5F9c",
    authDomain: "machine-7ca6e.firebaseapp.com",
    databaseURL: "https://machine-7ca6e.firebaseio.com",
    projectId: "machine-7ca6e",
    storageBucket: "machine-7ca6e.appspot.com",
    messagingSenderId: "355310789654"
  };
  firebase.initializeApp(config);
  database = firebase.database();
function sendData(){
let colorDatabase = database.ref("colors");

    
    
  // Make an object with data in it
  var data = {
    lm: lm,
      tm:tm,
      st:st
  };
  console.log("saving data");
  console.log(data);

  let color = colorDatabase.push(data, finished);
  console.log("Firebase generated key: " + color.key);

  

  // Reload the data for the page
  function finished(err) {
    if (err) {
      console.error("ooops, something went wrong.");
      console.error(err);
    } else {
      console.log('Data saved successfully');

    }
  }
}
dataSend()
