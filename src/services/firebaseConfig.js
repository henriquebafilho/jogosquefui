import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz4t1gJ_pm4UYnhCQsWrjBMH2VVx3DYs8",
  authDomain: "jogosquefui-b947f.firebaseapp.com",
  projectId: "jogosquefui-b947f",
  storageBucket: "jogosquefui-b947f.appspot.com",
  messagingSenderId: "658131790057",
  appId: "1:658131790057:web:81a4849f542afd03c5a878"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);