// src/app/models/message.model.ts
export interface Message {
  text: string;
  from: 'user' | 'ai';
}
