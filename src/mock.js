export const contacts = [
  {
    id: 1,
    thumb: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Emily Henderson",
    lastMessage: "Send a photo",
    totalMessageNoRead: 2,
    date: "2018-11-25 17:55:00",
    hasOn: true
  },
  {
    id: 2,
    thumb: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Anna Johanson",
    lastMessage: "Send a photo",
    totalMessageNoRead: 1,
    date: "2018-11-25 17:39:00",
    hasOn: true
  },
  {
    id: 3,
    thumb: "https://randomuser.me/api/portraits/women/43.jpg",
    name: "Elysha Seeley",
    lastMessage: "Wow! it's beautiful :)",
    totalMessageNoRead: 0,
    date: "2018-11-25 17:39:00",
    hasOn: false
  },
  {
    id: 4,
    thumb: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Megan Kelly",
    lastMessage: "Hey, How it is going?",
    totalMessageNoRead: 0,
    date: "2018-09-25 10:39:00",
    hasOn: false
  },
  {
    id: 5,
    thumb: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Anabel Barajas",
    lastMessage: "Hey, Jonh What did have for lunch",
    totalMessageNoRead: 0,
    date: "2018-08-24 10:00:00",
    hasOn: false
  },
  {
    id: 6,
    thumb: "https://randomuser.me/api/portraits/women/48.jpg",
    name: "Ariana Williams",
    lastMessage: "I had a perfect day, I hope you too",
    totalMessageNoRead: 0,
    date: "2018-08-22 10:00:00",
    hasOn: false
  }
];

export const messages = [
  {
    id: 1,
    thumb: "https://randomuser.me/api/portraits/women/50.jpg",
    messages: [
      {
        id: 1,
        type: "text",
        text: "Hi, Emily! I am in  Tokyo now :)",
        date: "2018-08-30 20:01",
        me: true
      },
      {
        id: 2,
        type: "text",
        text: "Wow! It's a very exotic street!",
        date: "2018-08-30 20:02",
        me: false
      }
    ]
  },
  {
    id: 2,
    thumb: "https://randomuser.me/api/portraits/women/68.jpg",
    messages: [
      {
        id: 1,
        type: "text",
        text: "Hi, Anna! I am in  Tokyo now :)",
        date: "2018-08-30 20:01",
        me: true
      },
      {
        id: 2,
        type: "text",
        text: "Wow! It's a very exotic street!",
        date: "2018-08-30 20:02",
        me: false
      }
    ]
  }
];
