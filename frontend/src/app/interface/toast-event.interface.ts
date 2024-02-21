import { EventTypes } from './../enum/event-types';

export interface ToastEvent {
  type: EventTypes;
  titulo?: string;
  mensagem: string;
}
