import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyABZZGzEXNxztRySZfsotZh0wrx_0Gbduo',
  authDomain: 'react-login-4e079.firebaseapp.com',
  projectId: 'react-login-4e079',
  storageBucket: 'react-login-4e079.firebasestorage.app',
  messagingSenderId: '532676614998',
  appId: '1:532676614998:web:0716ca9fbcfa6a1f6354f7',
  measurementId: 'G-47Z4GMYD7S',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
