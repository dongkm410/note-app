import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAAlRIeoap_vKFc_dodZr5QuEmA7QNvG2o',
  authDomain: 'note-b65e9.firebaseapp.com',
  projectId: 'note-b65e9',
  storageBucket: 'note-b65e9.appspot.com',
  messagingSenderId: '970170217365',
  appId: '1:970170217365:web:a52b8c4e822f5e366a7c9c',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
