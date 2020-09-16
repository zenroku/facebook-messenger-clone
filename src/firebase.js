import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDT11P_MIe6IH-fmW-V5UdTbl6tthrGzAM",
    authDomain: "facebook-messenger-clone-2ea15.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-2ea15.firebaseio.com",
    projectId: "facebook-messenger-clone-2ea15",
    storageBucket: "facebook-messenger-clone-2ea15.appspot.com",
    messagingSenderId: "338009542918",
    appId: "1:338009542918:web:aeac8c5b4341e11a7ece87",
    measurementId: "G-FDKKR1HGJ2"
})

const db = firebaseApp.firestore()

export { db }