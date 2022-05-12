export interface Message {
  from: {
    uid: string,
    name: string,
  };
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

export interface Chat {
  name: string;
  uid: string;
  online: boolean;
  icon?: string;
}
