import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbTmPl7LTD1IMDwcbJeixwXRVcGX7CPPQ",
    authDomain: "mikuna-alli.firebaseapp.com",
    projectId: "mikuna-alli",
    storageBucket: "mikuna-alli.appspot.com",
    messagingSenderId: "764675185863",
    appId: "1:764675185863:web:feb29a382c687f19e1f2e2",
    measurementId: "G-2QC3WJQBC7"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}
