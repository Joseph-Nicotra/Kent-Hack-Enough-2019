const admin = require('firebase-admin');
let serviceAccount = require('./fireBaseAuth');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

function writeData(data){
    let ref = db.collection('visitors').doc('30130015001');
    let setRef = ref.set(data);
}

let data = {
    name: "Dale Boi",
    lastSignedIn: 129381023,
    lastSignedOut: 12938123,
    isSignedIn: false
}

writeData(data);

/*
let docRef = db.collection('visitors').get().then((snapshot) =>{
    snapshot.forEach((doc) => {
        console.log(doc.data());
    });
});
Users
-firstName
-lastName
-isAllowed
-permission
*/