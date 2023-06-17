import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAz4t1gJ_pm4UYnhCQsWrjBMH2VVx3DYs8",
  authDomain: "jogosquefui-b947f.firebaseapp.com",
  projectId: "jogosquefui-b947f",
  storageBucket: "jogosquefui-b947f.appspot.com",
  messagingSenderId: "658131790057",
  appId: "1:658131790057:web:81a4849f542afd03c5a878"
};

export const app = initializeApp(firebaseConfig);

export const AppFirestore = () => {
  const [mandante, setMandante] = useState("");
  const [visitante, setVisitante] = useState("");
  const [golsMandante, setGolsMandante] = useState("");
  const [golsVisitante, setGolsVisitante] = useState("");
  const [campeonato, setCampeonato] = useState("");
  const [data, setData] = useState("");
  const [estadio, setEstadio] = useState("");
  const [penaltis, setPenaltis] = useState("");
  const [jogos, setJogos] = useState([]);
  
  const db = getFirestore(app);
  const jogosCollectionRef = collection(db, "jogosBotafogo");
  
  useEffect(() => {
    const getJogos = async () => {
      const data = await getDocs(jogosCollectionRef);
      setJogos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getJogos();
  }, []);
  
  todosOsJogos = jogos;
};

export let todosOsJogos;