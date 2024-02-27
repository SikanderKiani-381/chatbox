// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [messageUser, setMessageUser] = useState('');     // messageUSer and messageAdmin states used for update states
  const [messageAdmin, setMessageAdmin] = useState('');
  const [chatUser, setChatUser] = useState([]);          // chatUser and chatAdmin states used for store messages from both users into [] arrays
  const [chatAdmin, setChatAdmin] = useState([]);

  const handleUser = (e) => {
    setMessageUser(e.target.value);
  };

  const handleAdmin = (e) => {
    setMessageAdmin(e.target.value);
  };

  const sendMessageUser = () => {
    if (messageUser !== '') {
      setChatUser([{ sender: 'User', message: messageUser }, ...chatUser ]);
      setMessageUser('');
    }
  };

  const sendMessageAdmin = () => {
    if (messageAdmin !== '') {
      setChatAdmin([{ sender: 'Admin', message: messageAdmin }, ...chatAdmin ]);
      setMessageAdmin('');
    }
  };


  return (
    <div className="App">
      <div className="main-container">
        <div className="chat-container">
          <div className="header">
            <h2>User</h2>
          </div>
          <div className="chat-section">
            {chatUser.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}:</strong> {msg.message}
              </div>
            ))}

            {chatAdmin.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}:</strong> {msg.message}
            
              </div>
            ))}
          </div>
          <div className="input-section">
            <input type="text" placeholder='Type Your Message...' name=" user_1" value={messageUser} onChange={handleUser} />
            <button className='msg-btn' onClick={sendMessageUser}>Send</button>
          </div>
        </div>
        <div className="chat-container">
          <div className="header">
            <h2>Admin</h2>
          </div>
          <div className="chat-section">
            {chatAdmin.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}:</strong> {msg.message}
            
              </div>
            ))}

            {chatUser.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}:</strong> {msg.message}
              </div>
            ))}
          </div>
          <div className="input-section">
            <input type="text" placeholder='Type Your Message...' name="user_2" value={messageAdmin} onChange={handleAdmin} />
            <button className='msg-btn' onClick={sendMessageAdmin}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
