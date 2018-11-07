const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const database = admin.database().ref('main/');
exports.pushTransaction = functions.database.ref('main/events/{event_name}/{position}/{id}/').onCreate((snapshot, context) => {


const score = snapshot.val().score;
console.log(score);
const house = snapshot.val().house;
console.log(house);
const scoreAdd = admin.database().ref('score').child(house);
	
return scoreAdd.transaction((current)=>{
	return (current||0) + +score;

});

});
