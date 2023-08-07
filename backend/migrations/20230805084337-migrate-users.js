const { ObjectId } = require('mongodb');

module.exports = {
  async up(db, client) {
    const users = [
      {
        "_id": new ObjectId("647b6cad0e9d23196d9d75fe"),
        "name": "Zahra",
        "email": "zahrahyt106@yahoo.com",
        "password": "$2b$10$Sk1MGgcinXzdbUgTeeJlbuc938IGuPuXykoFJrOcYXXzZ/rHqttqS",
        "isAdmin": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("647b6d5e0e9d23196d9d7601"),
        "name": "Micheal",
        "email": "michmich203@yahoo.com",
        "password": "$2b$10$wQbcRA5aNgV7CyrqaGocIu9GqW4wd3UAZqC3/353yzKYCkHKWw7jG",
        "isAdmin": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("647b6d6c0e9d23196d9d7604"),
        "name": "Sally",
        "email": "Sally203@yahoo.com",
        "password": "$2b$10$ASYPnIbizBeyMcTGJti8ruCJgAkw4v4ieukdrlN6ri5f6XWANlKyu",
        "isAdmin": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("6496f7e5c2485006e59cea94"),
        "name": "Ashlly",
        "email": "ashlly@gmail.com",
        "password": "$2b$10$BQDrJh1IFlwpPk/V1mGK/erIJbq1tBonlVdT52fdHyb5CzboQjTZ6",
        "isAdmin": true,
        "__v": 1
      },
      {
        "_id": new ObjectId("6496f832c2485006e59ceaa2"),
        "name": "Cameron",
        "email": "cameron@gmail.com",
        "password": "$2b$10$5ktYzHVtnwEBc77oJswl2utL3tAXpj6ZOh/oAk98JScKxl8TBwyxG",
        "isAdmin": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64b7f4253caddd8f6e7bd1ea"),
        "name": "Mike",
        "email": "Mike12345@gmail.com",
        "password": "$2b$10$B1rgEowKMNu/n3GWwAhee.bS8Sg4qUbRY4Uvf1rwOo7Ztr9xbv30y",
        "isAdmin": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64b92dfc7b63dffcb8b79859"),
        "name": "Amelia",
        "email": "FletcherA@gmail.com",
        "password": "$2b$10$UN3IBwRRQfE3k4A6XcvRgOiUhhvsdfK0sCmV/7x3O/G8qhH6BZYBS",
        "isAdmin": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64bd3c2d503930d1b1e4266b"),
        "name": "Jack",
        "email": "EvansJ@gmail.com",
        "password": "$2b$10$jWW5YllWxlkcTMxRgoZMtOp42y3cq.bNFD5fqNxnD/COZftWgHXN6",
        "isAdmin": false,
        "__v": 0
      }
    ];

    await db.collection('users').insertMany(users);
  },

  async down(db, client) {
    await db.collection('users').deleteMany({});
  }
};
