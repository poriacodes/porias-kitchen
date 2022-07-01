import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyBHxt-gRRLkuyHcKzpHxL_nIYBoThZvI5M",
    authDomain: "porias-kitchen.firebaseapp.com",
    databaseURL: "https://porias-kitchen-default-rtdb.firebaseio.com",
    projectId: "porias-kitchen",
    storageBucket: "porias-kitchen.appspot.com",
    messagingSenderId: "330993181072",
    appId: "1:330993181072:web:d03789c08b815e0384d315"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage };
  

  