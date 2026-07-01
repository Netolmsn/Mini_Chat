export interface Message {
  id: number;
  author: string;
  text: string;
}

export type CreateMessageDTO = Omit<Message, 'id'>;