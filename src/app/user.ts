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

export interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}
