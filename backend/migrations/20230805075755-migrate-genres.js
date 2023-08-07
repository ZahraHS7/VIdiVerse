const { ObjectId } = require('mongodb');

module.exports = {
  async up(db, client) {
    const genresData = [
      {
        "_id": new ObjectId("647b6ec70e9d23196d9d7608"),
        "type": "Romantic",
        "__v": 0
      },
      {
        "_id": new ObjectId("647b6ed20e9d23196d9d760a"),
        "type": "Comedy",
        "__v": 0
      },
      {
        "_id": new ObjectId("647b6edc0e9d23196d9d760c"),
        "type": "Drama",
        "__v": 0
      },
      {
        "_id": new ObjectId("6485e5d5be0dc1b8289ea4d4"),
        "type": "Action",
        "__v": 0
      },
      {
        "_id": new ObjectId("6485e726be0dc1b8289ea4de"),
        "type": "Sci-fi",
        "__v": 0
      },
      {
        "_id": new ObjectId("64b3a09e71e91646a61e8f55"),
        "type": "Fantasy",
        "__v": 0
      },
      {
        "_id": new ObjectId("64bfc34bddec377022321558"),
        "type": "History",
        "__v": 0
      }
    ];

    await db.collection('genres').insertMany(genresData);
  },

  async down(db, client) {
    await db.collection('genres').deleteMany({});
  }
};
