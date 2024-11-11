import Service from '@ember/service';
import { service } from '@ember/service';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB_HY1S7co9TRuJcabQPJ0ec3DSdFEzNDg",
    authDomain: "seby-test-a3dd6.firebaseapp.com",
    projectId: "seby-test-a3dd6",
    storageBucket: "seby-test-a3dd6.firebasestorage.app",
    messagingSenderId: "896713612415",
    appId: "1:896713612415:web:6fbdc5e35935e9971e734a",
    measurementId: "G-F2S8G5HS41"
  };

export default class FirebaseService extends Service {
    @service firebase; // global var you can use the name of afterwords
    app = initializeApp(firebaseConfig);
    db = getFirestore(this.app);
    analytics = getAnalytics(app);
}