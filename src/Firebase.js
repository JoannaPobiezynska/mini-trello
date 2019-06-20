import firebase from 'firebase';
let firebaseConfig = {
    apiKey: "AIzaSyDsEoBxYr0l6JA4_dvnIMQIvqBCyeEVn4Y",
    authDomain: "mini-trello-dbdde.firebaseapp.com",
    databaseURL: "https://mini-trello-dbdde.firebaseio.com",
    projectId: "mini-trello-dbdde",
    storageBucket: "mini-trello-dbdde.appspot.com",
    messagingSenderId: "917643438694",
    appId: "1:917643438694:web:4493ac8e15b925d3"
};

let Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;

