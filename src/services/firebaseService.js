const firebase = require('firebase/app')
const firestore = require('firebase/firestore')
//const { doc, getDoc, setDoc } = require('firebase/firestore')

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

const db = firestore.getFirestore()

module.exports = { db }