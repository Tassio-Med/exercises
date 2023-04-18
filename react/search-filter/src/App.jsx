import './App.css';
import { Users } from "./users";
import {useState} from "react"

function App() {
  const [query, setQuery] = useState("");

  console.log(query)
  return (
    <div className="App">
      <input
        type="text"
        placeholder='Search'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className='list'>
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query))
          .map((user) => (
          <li className='listItem' key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
