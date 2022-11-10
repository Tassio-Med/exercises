import { useState } from 'react'
import './app.css'

import { db } from './firebaseConnection';
import { doc, setDoc } from 'firebase/firestore';

function App() {
  const [título, setTítulo] = useState('');
  const [autor, setAutor] = useState('');

  async function handleAdd(){
    await setDoc(doc(db, "posts", "12345"), {
      titulo: título,
      autor: autor,
    })
    .then(() => {
      console.log("DADOS REGISTRADOS NO BANCO!")
    })
    .catch((error) => {
      console.log("GEROU ERRO" + error)
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
      </div>

    </div>
  );
}

export default App;
