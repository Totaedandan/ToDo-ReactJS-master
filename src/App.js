import React, { useState, useEffect } from 'react';
import Todo from './Todo'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import './App.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';










function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');



  // When App Loads, we need to listen to database and fetch new todos as they get added/removed
  useEffect(() => {
    //  this code here...fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
    })
  }, []);



  const addTodo = (event) => {
    // This will fire off when we click the button
    event.preventDefault(); // It will Stop the page from Refreshing

    db.collection('todos').add({
      todo : input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput(''); // Clears the Input Field after submit
  }



  return (
    <div className="App">
      <h1>Hello Subhampreet</h1>
      

      <form>

        <FormControl>
          <InputLabel>Write a ToDo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />

        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add To-Do
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add To-Do</button> */}
      </form>


      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
