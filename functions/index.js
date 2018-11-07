const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const updatesRef = admin.database().ref('main/events');
exports.pushTransaction = functions.updatesRef.ref('/main/events/{event_name}/{position}/{id}/').onCreate((snapshot, context) => {


const score = snapshot.score.val();
const house = snapshot.house.val();
const scoreAdd = admin.database().ref('score').child(house);
	
return scoreAdd.transaction(current)=>{
	return (current||0)+score;

});
