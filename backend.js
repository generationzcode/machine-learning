var promptname;
var name;
var enemyname;
var punchbool=0;
var duckboool=0;
var message,alldata,name;
  var config = {
    apiKey: "AIzaSyCTfmsiPdffvQchUrnDwDv9m8SUSEzo1qU",
    authDomain: "machine-f60e6.firebaseapp.com",
    databaseURL: "https://machine-f60e6.firebaseio.com",
    projectId: "machine-f60e6",
    storageBucket: "machine-f60e6.appspot.com",
    messagingSenderId: "829526108897"
  };
  firebase.initializeApp(config);
  database = firebase.database();
      var gamedatabase = database.ref("games");
      function get(){
          gamedatabase.once("value",gotData);
    function gotData(results){
        let data=results.val();
        let keys = Object.keys(data);
        
        alldata={
            entries:[]
        };
    for(let key of keys){
        let record=data[key];
        alldata.entries.push(record);
    }
          console.log(alldata.entries[0]);
        
        
        
        //PROBLEM
        
        
        
        
        for (let i=(alldata.entries.length-1);i>0;i--){
            if(alldata.entries[i].name === promptname){
                if(alldata.entries[i].punch+alldata.entries[i].duck > (punchbool+duckboool)){
                    document.body.innerHTML="<center><h2>You lost!</h2></center>";
                    document.body.style.backgroundColor="red";
                }
                else{
                    document.body.innerHTML="<center><h2>You won!</h2></center>";
                    document.body.style.backgroundColor="green";
                }
                break;
            }
        }
        
        
        
        
     //PROBLEM
        
        
        
        
    }//ends here
      }
function sendData(){

 //getting data starts here
    
    
 
    
  // Make an object with data in it
  var data = {
    punch:punchbool,
      duck:duckboool,
      name:name
  };
  console.log("saving data");
  console.log(data);

  let color = gamedatabase.push(data, finished);
  console.log("Firebase generated key: " + color.key);

  tr=true;

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

function hit(){
     punchbool+=1;
    console.log("punch!");
 }
function duck(){
    duckboool+=1;
    console.log("duck");
}
function dataSend(){
    name=prompt("your id?");
    sendData();
    promptname=prompt("what is the name of the person you played this game with?");
    get();
} 

