import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCEygtAWGDX4vQIbyeY5ievxxUVzHLRyQY',
  authDomain: 'business-meeting-e9fdb.firebaseio.com/',
  databaseURL: 'https://business-meeting-e9fdb.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
