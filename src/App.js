import React, { useState, useEffect } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core'
import './App.css'
import Message from './Message'
import { db } from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('set your username'))
  }, [])


  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <img alt="" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Just Facebook Messenger Clone</h1>
      <h1>Welcome {username}</h1>
      <form className="app__form" onSubmit={sendMessage}>
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={(event) => setInput(event.target.value)} />
          <IconButton className="app__iconButton" variant="contained" disabled={!input} color="primary" type="submit">
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => {
            return <Message key={id} username={username} message={message} />
          })
        }
      </FlipMove>
    </div>
  );
}

export default App;
