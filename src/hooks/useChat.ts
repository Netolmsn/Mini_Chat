import { useState, useEffect, useCallback, useRef } from 'react';
import { Message } from '../@types/chat';
import { mockApi } from '../services/mockApi';

const incomingMessagesMock = [
  { author: "Ana", text: "Que legal esse chat!" },
  { author: "Pedro", text: "Alguém aí manja de React?" },
  { author: "Lucas", text: "Ficou muito rápida essa renderização!" }
];

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [typingUser, setTypingUser] = useState<string | null>(null);
  const incomingIndexRef = useRef(0);

  useEffect(() => {
    mockApi.getMessages().then((data) => {
      setMessages(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      const currentIndex = incomingIndexRef.current;

      if (currentIndex < incomingMessagesMock.length) {
        const nextMessage = incomingMessagesMock[currentIndex];
        
        setTypingUser(nextMessage.author);

        setTimeout(async () => {
          const saved = await mockApi.postMessage(nextMessage);
          setMessages((prev) => [...prev, saved]);
          setTypingUser(null);
          incomingIndexRef.current += 1;
        }, 1500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoading]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const myMessage = {
      author: "Você",
      text: text.trim()
    };

    const saved = await mockApi.postMessage(myMessage);
    setMessages((prev) => [...prev, saved]);
  }, []);

  return { messages, isLoading, typingUser, sendMessage };
};