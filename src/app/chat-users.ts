import {User} from "./user";

export const USERS: User[] = [
  {
    id: 1,
    avatar: '/assets/avatar/1.png',
    name: 'Alice Freeman',
    date: new Date(),
    messages: [

      {
        text: 'Hello!',
        date: new Date(),
        isFromUser: true,
      },
      {
        text: 'Hi!',
        date: new Date(),
        isFromUser: false,
      },
      {
        text: 'How are you?!',
        date: new Date(),
        isFromUser: true,
      },
      {
        text: 'I am fine, and you?',
        date: new Date(),
        isFromUser: false,
      },
      {
        text: 'Me too!',
        date: new Date(),
        isFromUser: true,
      }
    ]
  },
  {
    id: 2,
    avatar: '/assets/avatar/2.png',
    name: 'Josefina',
    date: new Date(),
    messages: [
      {
        text: 'Phasellus volutpat, metus quis fermentum sollicitudin',
        date: new Date(),
        isFromUser: true,
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: new Date(),
        isFromUser: false,
      },
      {
        text: 'Duis tincidunt mollis pulvinar. Cras suscipit libero nunc, sed porta libero accumsan in. Quisque venenatis convallis varius. Ut consequat dolor in quam maximus lacinia.',
        date: new Date(),
        isFromUser: true,
      },
      {
        text: 'Integer tempus hendrerit dolor',
        date: new Date(),
        isFromUser: false,
      },
      {
        text: 'Aliquam eu hendrerit neque',
        date: new Date(),
        isFromUser: true,
      },
      {
        text: 'Phasellus sed ante et erat venenatis vulputate vel nec lacus. Integer tempus hendrerit dolor, quis vestibulum massa. Praesent hendrerit enim quis pellentesque bibendum. Duis a ipsum eget massa egestas tempor sit amet id lacus. Morbi odio magna, consequat eget vestibulum in, rutrum non turpis. Nulla a magna et nulla vehicula scelerisque eu vitae elit. Nullam accumsan elit at sodales scelerisque. Duis hendrerit mauris quis tempor pharetra. ',
        date: new Date(),
        isFromUser: false,
      },
    ]
  },
  {
    id: 3,
    avatar: '/assets/avatar/3.png',
    name: 'Velazquez',
    date: new Date(),
    messages: []
  },
  {
    id: 4,
    avatar: '/assets/avatar/4.png',
    name: 'Barrera',
    date: new Date()
  },
  {
    id: 5,
    avatar: '/assets/avatar/5.png',
    name: 'Haroon',
    date: new Date()
  },
  {
    id: 6,
    avatar: '/assets/avatar/6.png',
    name: 'Frazer',
    date: new Date()
  },
  {
    id: 7,
    avatar: '/assets/avatar/7.png',
    name: 'Farhan',
    date: new Date()
  },
  {
    id: 8,
    avatar: '/assets/avatar/8.png',
    name: 'George',
    date: new Date()
  },
  {
    id: 9,
    avatar: '/assets/avatar/9.png',
    name: 'Gerald',
    date: new Date()
  },
  {
    id: 10,
    avatar: '/assets/avatar/10.png',
    name: 'Karl',
    date: new Date()
  }
];
