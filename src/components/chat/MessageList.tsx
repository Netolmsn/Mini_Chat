import React from 'react';
import styled from 'styled-components';
import { Message } from '../../@types/chat';

const ListContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #f5f7fb;
`;

const BubbleWrapper = styled.div<{ $isMe: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$isMe ? 'flex-end' : 'flex-start'};
`;

const AuthorLabel = styled.span`
  font-size: 0.75rem;
  color: #8e8e93;
  margin-bottom: 2px;
  padding: 0 4px;
`;

const Bubble = styled.div<{ $isMe: boolean }>`
  max-width: 75%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 0.95rem;
  line-height: 1.4;
  background-color: ${props => props.$isMe ? '#007aff' : '#e5e5ea'};
  color: ${props => props.$isMe ? '#ffffff' : '#000000'};
  border-bottom-right-radius: ${props => props.$isMe ? '4px' : '16px'};
  border-bottom-left-radius: ${props => props.$isMe ? '16px' : '4px'};
`;

interface MessageListProps {
  messages: Message[];
  currentUserName: string;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, currentUserName }) => {
  return (
    <ListContainer>
      {messages.map((msg) => {
        const isMe = msg.author === currentUserName;
        return (
          <BubbleWrapper key={msg.id} $isMe={isMe}>
            {!isMe && <AuthorLabel>{msg.author}</AuthorLabel>}
            <Bubble $isMe={isMe}>{msg.text}</Bubble>
          </BubbleWrapper>
        );
      })}
    </ListContainer>
  );
};