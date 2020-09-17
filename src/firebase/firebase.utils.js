import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyDm2agKeXt4CLmWrbTzTPsCNDv6LB4bSiA",
    authDomain: "crown-db-srijan.firebaseapp.com",
    databaseURL: "https://crown-db-srijan.firebaseio.com",
    projectId: "crown-db-srijan",
    storageBucket: "crown-db-srijan.appspot.com",
    messagingSenderId: "1049812363436",
    appId: "1:1049812363436:web:8d957cdebd6a30aff19709"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get() 
    console.log(snapshot);
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef
}
 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;