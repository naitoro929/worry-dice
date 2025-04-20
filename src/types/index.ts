export enum MessageType {
  USER = 'user',
  ADVICE = 'advice'
}

export interface Message {
  id: string;
  content: string;
  type: MessageType;
}