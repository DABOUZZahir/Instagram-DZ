import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyDmwiVuuDABmte7ZE7e8D5QW5dzwRX86Cs",
    authDomain: "instagram-zh.firebaseapp.com",
    projectId: "instagram-zh",
    storageBucket: "instagram-zh.appspot.com",
    messagingSenderId: "128608011216",
    appId: "1:128608011216:web:646887ad87015afb03efd5"};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase)

export { firebase, FieldValue }