import { Message } from './message.interface';

export interface MessageResponse {
  code: number;
  status: string;
  messages: Message[];
}
