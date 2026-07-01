import React, { useState } from 'react';
import styled from 'styled-components';

const InputArea = styled.form`
  display: flex;
  padding: 12px;
  background-color: #fff;
  border-top: 1px solid #e5e5ea;
  gap: 8px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #d1d1d6;
  border-radius: 20px;
  outline: none;
  font-size: 0.95rem;
  &:focus { border-color: #007aff; }
`;

const SendButton = styled.button`
  background-color: #007aff;
  color: #fff;
  border: none;
  padding: 0 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  &:disabled { background-color: #c7c7cc; cursor: not-allowed; }
`;

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSendMessage(text);
    setText('');
  };

  return (
    <InputArea onSubmit={handleSubmit}>
      <StyledInput 
        type="text" 
        placeholder="Digite uma mensagem..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SendButton type="submit" disabled={!text.trim()}>Enviar</SendButton>
    </InputArea>
  );
};