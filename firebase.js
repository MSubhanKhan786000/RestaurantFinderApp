import firebase from '@react-native-firebase/app';

const firebaseConfig = {apiKey: "AIzaSyDsHfaBklCZWZj9jX2-Dj5yq_wLmy19cnE",
authDomain: "my-expo-app-97fa4.firebaseapp.com",
projectId: "my-expo-app-97fa4",
storageBucket: "my-expo-app-97fa4.appspot.com",
messagingSenderId: "218333149435",
appId: "1:218333149435:web:d4a840747b9b4b1058d85e",

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
