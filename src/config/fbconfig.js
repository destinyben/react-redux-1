import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyCrTQtOwvB013oYusZHYKu4rBR5SrTbmD8',
    authDomain: 'evernote-clone-e9ee6.firebaseapp.com',
    projectId: 'evernote-clone-e9ee6',
    storageBucket: 'evernote-clone-e9ee6.appspot.com',
    messagingSenderId: '948859295885',
    appId: '1:948859295885:web:3d4627e9fbf99a4df32ac4'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
