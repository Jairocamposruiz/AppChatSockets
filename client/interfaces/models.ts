export interface Message {
  from: string;
  to: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface User {
  name: string;
  email: string;
  online: boolean;
  uid: string;
}
