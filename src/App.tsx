import React from 'react';
import { GlobalStyle } from './styles/global';
import { ChatWindow } from './components/chat/ChatWindow';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ChatWindow />
    </>
  );
};

export default App;