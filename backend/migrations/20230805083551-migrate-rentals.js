const { ObjectId } = require('mongodb');

module.exports = {
  async up(db, client) {
    const rentals = [
      {
        "_id": new ObjectId("64becb3d18d92f41230b0f4e"),
        "customer": {
          "firstName": "Amelia",
          "lastName": "Fletcher",
          "email": "FletcherA@gmail.com",
          "phone": "+17021234567",
          "postCode": "20505",
          "_id": new ObjectId("64be35befecbb86fd5db27f4")
        },
        "movie": {
          "title": "Avatar: The Way of Water",
          "dailyRentalRate": 6,
          "_id": new ObjectId("64bc18fb5a6e24e9829ea055")
        },
        "dateOut": {
          "$date": "2023-07-24T19:04:29.278Z"
        },
        "__v": 0,
        "dateReturned": {
          "$date": "2023-07-25T20:47:18.506Z"
        },
        "rentalFee": 6
      },
      {
        "_id": new ObjectId("64c034facd54a44ae67feaab"),
        "customer": {
          "firstName": "Samantha",
          "lastName": "Wick",
          "email": "WickS@gmail.com",
          "phone": "+17021234567",
          "postCode": "20505",
          "_id": new ObjectId("64be9d31846312443f8be964")
        },
        "movie": {
          "title": "Avatar: The Way of Water",
          "dailyRentalRate": 6,
          "_id": new ObjectId("64bc18fb5a6e24e9829ea055")
        },
        "dateOut": {
          "$date": "2023-07-25T20:47:54.264Z"
        },
        "__v": 0
      },
      {
        "_id": new ObjectId("64c21f00509b0438d0ae3cfd"),
        "customer": {
          "firstName": "Lily",
          "lastName": "Evans",
          "email": "EvansL@gamil.com",
          "phone": "+17021234562",
          "postcode": "20503",
          "_id": new ObjectId("64c21eff509b0438d0ae3cf9")
        },
        "movie": {
          "title": "Black Swan",
          "dailyRentalRate": 8,
          "_id": new ObjectId("64901b720060e9bff6861dbf")
        },
        "dateOut": {
          "$date": "2023-07-27T07:38:40.131Z"
        },
        "__v": 0
      },
      {
        "_id": new ObjectId("64c21f9e509b0438d0ae3d0c"),
        "customer": {
          "firstName": "Margaret",
          "lastName": "Miller",
          "email": "MillerM@gmail.com",
          "phone": "+17021234564",
          "postcode": "20501",
          "_id": new ObjectId("64c21f9e509b0438d0ae3d08")
        },
        "movie": {
          "title": "Dunkirk",
          "dailyRentalRate": 7,
          "_id": new ObjectId("64bfc6a5ddec37702232155e")
        },
        "dateOut": {
          "$date": "2023-07-27T07:41:18.981Z"
        },
        "__v": 0
      },
      {
        "_id": new ObjectId("64c23b91509b0438d0ae3d65"),
        "customer": {
          "firstName": "Tracy",
          "lastName": "O'Ryan",
          "email": "RyanT@gmail.com",
          "phone": "+17021234567",
          "postcode": "20501",
          "_id": new ObjectId("64c23b91509b0438d0ae3d61")
        },
        "movie": {
          "title": "The Notebook",
          "dailyRentalRate": 9,
          "_id": new ObjectId("647b6ff10e9d23196d9d7617")
        },
        "dateOut": {
          "$date": "2023-07-27T09:40:33.642Z"
        },
        "__v": 0
      },
      {
        "_id": new ObjectId("64c23c9c509b0438d0ae3d79"),
        "customer": {
          "firstName": "David",
          "lastName": "Murphy",
          "email": "MurphyD@gmail.com",
          "phone": "+17021234566",
          "postcode": "20503",
          "_id": new ObjectId("64c23c9c509b0438d0ae3d75")
        },
        "movie": {
          "title": "The Hobbit: An Unexpected Journey",
          "dailyRentalRate": 10,
          "_id": new ObjectId("64b3a3f1b7be7242e37ce938")
        },
        "dateOut": {
          "$date": "2023-07-27T09:45:00.171Z"
        },
        "__v": 0
      },
      {
        "_id": new ObjectId("64c23d0d509b0438d0ae3d87"),
        "customer": {
          "firstName": "Damian",
          "lastName": "Roberts",
          "email": "RobertsD@gmail.com",
          "phone": "+17021234564",
          "postcode": "20501",
          "_id": new ObjectId("64c23d0d509b0438d0ae3d83")
        },
        "movie": {
          "title": "Mission Impossible - Dead Reckoning Part One",
          "dailyRentalRate": 5,
          "_id": new ObjectId("64bfd5d942280d0cb7607b0c")
        },
        "dateOut": {
          "$date": "2023-07-27T09:46:53.303Z"
        },
        "__v": 0
      },
      {
        "_id": new ObjectId("64c23fe7509b0438d0ae3dbf"),
        "customer": {
          "firstName": "\tVictoria",
          "lastName": "\tDavis",
          "email": "VictoriaDavis@gmail.com",
          "phone": "+17021234567",
          "postcode": "20501",
          "_id": new ObjectId("64c23fe6509b0438d0ae3dbb")
        },
        "movie": {
          "title": "My Policeman",
          "dailyRentalRate": 9,
          "_id": new ObjectId("64c02bf4cd54a44ae67fea8e")
        },
        "dateOut": {
          "$date": "2023-07-27T09:59:03.013Z"
        },
        "__v": 0
      }
    ];

    await db.collection('rentals').insertMany(rentals);
  },

  async down(db, client) {
    await db.collection('rentals').deleteMany({});
  }
};
