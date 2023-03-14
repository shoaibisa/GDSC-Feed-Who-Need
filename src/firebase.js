import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAV6Pt7G59Apft4eQjUeDMdZdxZool2ugM',
	authDomain: 'feed-who-need.firebaseapp.com',
	projectId: 'feed-who-need',
	storageBucket: 'feed-who-need.appspot.com',
	messagingSenderId: '121616219698',
	appId: '1:121616219698:web:e65f03c5e7cd8371c0862b',
	databaseURL: 'https://feed-who-need-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
