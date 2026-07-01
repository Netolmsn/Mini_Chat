import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5ea;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.75rem;
  color: #8e8e93;
  font-weight: 500;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`;

const NameInput = styled.input`
  flex: 1;
  padding: 6px 12px;
  border: 1px solid #d1d1d6;
  border-radius: 6px;
  font-size: 0.85rem;
  outline: none;
  &:focus {
    border-color: #007aff;
  }
`;

const SaveButton = styled.button`
  background-color: #34c759;
  color: #ffffff;
  border: none;
  padding: 0 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  &:disabled {
    background-color: #e5e5ea;
    color: #aeaeActive;
    cursor: not-allowed;
  }
`;

interface UserProfileProps {
  currentName: string;
  onUpdateName: (name: string) => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ currentName, onUpdateName }) => {
  const [name, setName] = useState(currentName);

  const handleSave = () => {
    if (!name.trim()) return;
    onUpdateName(name);
  };

  return (
    <ProfileContainer>
      <Label>O Seu Nome no Chat:</Label>
      <InputRow>
        <NameInput 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Altere o seu nome..."
        />
        <SaveButton 
          type="button" 
          onClick={handleSave} 
          disabled={!name.trim() || name.trim() === currentName}
        >
          Guardar
        </SaveButton>
      </InputRow>
    </ProfileContainer>
  );
};