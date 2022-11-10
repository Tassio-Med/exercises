import { useState } from 'react'
import './app.css'

import { db } from './firebaseConnection';
import { doc, /*setDoc,*/ collection, addDoc, getDoc } from 'firebase/firestore';

function App() {
  const [título, setTítulo] = useState('');
  const [autor, setAutor] = useState('');

  async function handleAdd(){
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: título,
    //   autor: autor,
    // })
    // .then(() => {
    //   console.log("DADOS REGISTRADOS NO BANCO!")
    // })
    // .catch((error) => {
    //   console.log("GEROU ERRO" + error)
    // })
    await addDoc(collection(db, "posts"), {
      titulo: título,
      autor: autor,
    })
    .then(() => {
      console.log("DADOS REGISTRADOS NO BANCO!")
      setAutor('');
      setTítulo('');
    })
    .catch((error) => {
      console.log("GEROU ERRO" + error)
    })
  }

  async function buscarPost(){

    const postRef = doc(db, "posts", "1234")

    await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().autor)
      setTítulo(snapshot.data().título)
    })
    .catch(() => {
      console.log("ERRO AO BUSCAR")
    })
  }

  return (
    <div>
      <h1>React JS + Firebase</h1>
      <div className="container">
        <label htmlFor="">Título</label>
        <textarea
          type="text"
          placeholder="Digite o título"
          value={título}
          onChange={ (e) => setTítulo(e.target.value) }
          />

        <label htmlFor="">Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={ (e) => setAutor(e.target.value) }
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar Post</button>
      </div>

    </div>
  );
}

export default App;
