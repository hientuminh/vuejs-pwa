import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCXgKp76z72oB13B7Z0mi-oa7Ywdw9XsBk',
  authDomain: 'cropchat-2417d.firebaseapp.com',
  databaseURL: 'https://cropchat-2417d.firebaseio.com',
  projectId: 'cropchat-2417d',
  storageBucket: 'cropchat-2417d.appspot.com',
  messagingSenderId: '808632160528'
}

firebase.initializeApp(config)
const storage = firebase.storage()
const database = firebase.database()

// Add the public key generated from the console here.
// messaging.usePublicVapidKey("xxxxxxxxxxx");

export {
  storage,
  database
}
