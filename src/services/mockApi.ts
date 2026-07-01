import { Message, CreateMessageDTO } from '../@types/chat';

let mockDatabase: Message[] = [
  { id: 1, author: "João", text: "Olá, pessoal!" },
  { id: 2, author: "Maria", text: "Oi, João! Tudo bem?" },
  { id: 3, author: "João", text: "Tudo ótimo! E com você?" }
];

const LATENCY = 300;

export const mockApi = {
  getMessages: (): Promise<Message[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...mockDatabase]);
      }, LATENCY);
    });
  },

  postMessage: (messageDTO: CreateMessageDTO): Promise<Message> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newMessage: Message = {
          id: mockDatabase.length + 1,
          ...messageDTO
        };
        mockDatabase.push(newMessage);
        resolve(newMessage);
      }, LATENCY);
    });
  }
};