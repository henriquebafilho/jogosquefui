import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCdkyPws15rsH19OiVXpM934-NRK9Zro3Q",
  authDomain: "jogosquefui-4d5da.firebaseapp.com",
  projectId: "jogosquefui-4d5da",
  storageBucket: "jogosquefui-4d5da.appspot.com",
  messagingSenderId: "231012055776",
  appId: "1:231012055776:web:aecd2481d3a38bea1dae85"
};

export const app = initializeApp(firebaseConfig);

export const AppFirestore = () => {
  let [jogos, setJogos] = useState([]);

  const db = getFirestore(app);
  const jogosCollectionRef = collection(db, "jogosBotafogo");

  useEffect(() => {
    const getJogos = async () => {
      let data = await getDocs(jogosCollectionRef);
      setJogos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getJogos();
  });

  todosOsJogos = jogos;
};

export let todosOsJogos;