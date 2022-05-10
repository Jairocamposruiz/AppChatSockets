import { Message, User } from '@interfaces/models';

interface Response {
  ok: boolean;
  msg?: string;
}

export interface LoginResponse extends Response {
  user: User;
  token: string;
}

export interface RegisterResponse extends Response {
  user: User;
  token: string;
}

export interface RevalidateTokenResponse extends Response {
  user: User;
  token: string;
}

export interface GetMessagesResponse extends Response {
  messages: Message[];
}
