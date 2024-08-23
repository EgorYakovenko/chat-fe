// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import ChatList from './components/ChatList/ChatList';
import ChatModal from './components/ChatModal/ChatModal';
import MessageArea from './components/MessageArea/MessageArea';
import SearchBar from './components/SearchBar/SearchBar';
import ToastNotification from './components/ToastNotification/ToastNotification';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <SearchBar />
      <ChatList />
      <MessageArea />
      <ChatModal />
      <ToastNotification />
      <button>New chat</button>
    </div>
  );
}

export default App;
