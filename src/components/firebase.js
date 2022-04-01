import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBYc73yub6hI02A89tbtmCC1mZcoCUsJHc",
  authDomain: "social-media-project-7d1a6.firebaseapp.com",
  projectId: "social-media-project-7d1a6",
  storageBucket: "social-media-project-7d1a6.appspot.com",
  messagingSenderId: "894752915807",
  appId: "1:894752915807:web:22cb8659b96652374676ea",
  measurementId: "G-12SWM33MKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
};

export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
};

export const signInWithGithub = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
};

