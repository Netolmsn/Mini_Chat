import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useChat } from '../../hooks/useChat';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { UserProfile } from './UserProfile';

const WindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 440px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const Header = styled.header`
  background-color: #007aff;
  color: #ffffff;
  padding: 16px;
  text-align: center;
  font-weight: bold;
`;

const TypingNotice = styled.div`
  font-size: 0.8rem;
  color: #8e8e93;
  padding: 8px 16px;
  font-style: italic;
  background-color: #f5f7fb;
`;

const ScrollAnchor = styled.div`
  height: 0;
  overflow: hidden;
`;

export const ChatWindow: React.FC = () => {
  const { messages, isLoading, typingUser, userName, sendMessage, updateUserName } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typingUser]);

  if (isLoading) {
    return <div>Carregando Mensagens...</div>;
  }

  return (
    <WindowContainer>
      <Header>Mini Chat</Header>
      <UserProfile currentName={userName} onUpdateName={updateUserName} />
      <MessageList messages={messages} currentUserName={userName} />
      {typingUser && <TypingNotice>{typingUser} está digitando...</TypingNotice>}
      <ScrollAnchor ref={scrollRef} />
      <ChatInput onSendMessage={sendMessage} />
    </WindowContainer>
  );
};