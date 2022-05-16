import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDTF3a2TKHtjWCHv_U87YhND8CbZVYNfHM",
	authDomain: "todo-5dfcc.firebaseapp.com",
	projectId: "todo-5dfcc",
	storageBucket: "todo-5dfcc.appspot.com",
	messagingSenderId: "931960948743",
	appId: "1:931960948743:web:047c1551941e74195342a2",
	measurementId: "G-EPQZTTSBQ6",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };
