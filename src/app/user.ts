export interface User {
  id: number;
  avatar: string;
  name: string;
  message: string;
  messages?: Message[];
  date: string;
}
export interface Message {
  text: string;
  date: string;
  isFromUser: boolean;
}
