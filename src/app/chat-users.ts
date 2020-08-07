import {User} from "./user";

export const USERS: User[] = [
  {
    id: 1,
    avatar: '/assets/avatar/1.png',
    name: 'Alice Freeman',
    message: 'Hello, how are you?',
    date: 'Oct 28, 2020',
    messages: [
      {
        text: 'Hello!',
        date: '10/28/20, 4:00AM',
        isFromUser: true,
      },
      {
        text: 'Hi!',
        date: '10/28/20, 4:01AM',
        isFromUser: false,
      },
      {
        text: 'How are you?!',
        date: '10/28/20, 4:02AM',
        isFromUser: true,
      },
      {
        text: 'I am fine, and you?',
        date: '10/28/20, 4:03AM',
        isFromUser: false,
      },
      {
        text: 'Me too!',
        date: '10/28/20, 4:04AM',
        isFromUser: true,
      }
    ]
  },
  {
    id: 2,
    avatar: '/assets/avatar/2.png',
    name: 'Josefina',
    message: 'Hello, how are you?',
    date: 'Sep 06, 2020',
    messages: [
      {
        text: 'Phasellus volutpat, metus quis fermentum sollicitudin',
        date: '10/28/20, 4:00AM',
        isFromUser: true,
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '10/28/20, 4:01AM',
        isFromUser: false,
      },
      {
        text: 'Duis tincidunt mollis pulvinar. Cras suscipit libero nunc, sed porta libero accumsan in. Quisque venenatis convallis varius. Ut consequat dolor in quam maximus lacinia.',
        date: '10/28/20, 4:02AM',
        isFromUser: true,
      },
      {
        text: 'Integer tempus hendrerit dolor',
        date: '10/28/20, 4:03AM',
        isFromUser: false,
      },
      {
        text: 'Aliquam eu hendrerit neque',
        date: '10/28/20, 4:04AM',
        isFromUser: true,
      },
      {
        text: 'Phasellus sed ante et erat venenatis vulputate vel nec lacus. Integer tempus hendrerit dolor, quis vestibulum massa. Praesent hendrerit enim quis pellentesque bibendum. Duis a ipsum eget massa egestas tempor sit amet id lacus. Morbi odio magna, consequat eget vestibulum in, rutrum non turpis. Nulla a magna et nulla vehicula scelerisque eu vitae elit. Nullam accumsan elit at sodales scelerisque. Duis hendrerit mauris quis tempor pharetra. ',
        date: '10/28/20, 4:03AM',
        isFromUser: false,
      },
    ]
  },
  {
    id: 3,
    avatar: '/assets/avatar/3.png',
    name: 'Velazquez',
    message: 'Hello, how are you?',
    date: 'Aug 15, 2020',
    messages: [

    ]
  },
  {
    id: 4,
    avatar: '/assets/avatar/4.png',
    name: 'Barrera',
    message: 'Hello, how are you?',
    date: 'Jul 20, 2020'
  },
  {
    id: 5,
    avatar: '/assets/avatar/5.png',
    name: 'Haroon',
    message: 'Hello, how are you?',
    date: 'Jun 25, 2020'
  },
  {
    id: 6,
    avatar: '/assets/avatar/6.png',
    name: 'Frazer',
    message: 'Hello, how are you?',
    date: 'May 21, 202'
  },
  {
    id: 7,
    avatar: '/assets/avatar/7.png',
    name: 'Farhan',
    message: 'Hello, how are you?',
    date: 'Apr 17, 2020'
  },
  {
    id: 8,
    avatar: '/assets/avatar/8.png',
    name: 'George',
    message: 'Hello, how are you?',
    date: 'Mar 15, 2020'
  },
  {
    id: 9,
    avatar: '/assets/avatar/9.png',
    name: 'Gerald',
    message: 'Hello, how are you?',
    date: 'Feb 07, 2020'
  },
  {
    id: 10,
    avatar: '/assets/avatar/10.png',
    name: 'Karl',
    message: 'Hello, how are you?',
    date: 'Jan 01, 2020'
  }
];
