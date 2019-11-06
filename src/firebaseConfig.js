import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCl9JlSySzQN8M8RlUfgMR_LoKxuYst_tk",
    authDomain: "aerobic-gift-223013.firebaseapp.com",
    databaseURL: "https://aerobic-gift-223013.firebaseio.com",
    projectId: "aerobic-gift-223013",
    storageBucket: "aerobic-gift-223013.appspot.com",
    messagingSenderId: "595431675745",
    appId: "1:595431675745:web:e7a381ee4e53a7f0d2d720",
    measurementId: "G-G93JDSB7R3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// collection
const todosCollection = db.collection('todos');
const usersCollection = db.collection('users');

export {
    db,
    auth,
    currentUser,
    todosCollection,
    usersCollection
}
