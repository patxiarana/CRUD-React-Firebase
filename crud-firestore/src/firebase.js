// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyANjvSnUCLo_kuajv6PO2IiUB8pW0VxIKA',
	authDomain: 'fb-crud-746ac.firebaseapp.com',
	projectId: 'fb-crud-746ac',
	storageBucket: 'fb-crud-746ac.appspot.com',
	messagingSenderId: '355099289737',
	appId: '1:355099289737:web:a126d5e7e1c01fa21ffe58'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
