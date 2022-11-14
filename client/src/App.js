import './App.css';
import {useState, useEffect} from 'react';
import { text } from 'express';
import Item from './components/Item';
import axios from "axios";

function App() {

cons [text, setText] = useState("");
const [todo, setTodo] = useState([]);

useEffect(()=>{
  axios.get("http://localhost:5000/get-todo")
  .them((res) => console.log(res.data))
  .catch((err)=> console.log())
})

  return (
    <div className="App">
      <div className="container">
        <h1>To do List App</h1>

        <div className="top">
          <input type="text"
          placeholder="Write Something"
          value={text}
          onChange={(e)=> setText(e.target.value)}/>
          <div classNane="add">Add</div>
        </div>

        <div classNane="add">Add</div>

      </div>
    </div>
  );
}

export default App;
