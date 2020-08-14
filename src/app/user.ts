export interface User {
  id: number;
  avatar: string;
  name: string;
  messages?: Message[];
  date: Date;
}

export interface Message {
  text: string;
  date: Date;
  isFromUser: boolean;
}
