const { ObjectId } = require('mongodb');

module.exports = {
  async up(db, client) {
    const customersData = [
      {
        "_id": new ObjectId("64be35befecbb86fd5db27f4"),
        "firstName": "Amelia",
        "lastName": "Fletcher",
        "email": "FletcherA@gmail.com",
        "phone": "+17021234567",
        "isGold": false,
        "__v": 0,
        "postcode": "20505"
      },
      {
        "_id": new ObjectId("64be36eefecbb86fd5db27f8"),
        "firstName": "Charlie",
        "lastName": "Wilson",
        "email": "WilsonC@gmail.com",
        "phone": "+17021659834",
        "isGold": false,
        "__v": 0,
        "postcode": "20506"
      },
      {
        "_id": new ObjectId("64be9d31846312443f8be964"),
        "firstName": "Samantha",
        "lastName": "Wick",
        "email": "WickS@gmail.com",
        "phone": "+17021234567",
        "isGold": false,
        "__v": 0,
        "postcode": "20505"
      },
      {
        "_id": new ObjectId("64beb5e0b4b05f80c03f8b03"),
        "firstName": "Sophia",
        "lastName": "Smith",
        "email": "SmithS@gmail.com",
        "phone": "+17021234562",
        "isGold": false,
        "__v": 0,
        "postcode": "20504"
      },
      {
        "_id": new ObjectId("64c21eff509b0438d0ae3cf9"),
        "firstName": "Lily",
        "lastName": "Evans",
        "email": "EvansL@gamil.com",
        "phone": "+17021234562",
        "postcode": "20503",
        "isGold": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c21f9e509b0438d0ae3d08"),
        "firstName": "Margaret",
        "lastName": "Miller",
        "email": "MillerM@gmail.com",
        "phone": "+17021234564",
        "postcode": "20501",
        "isGold": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c23b91509b0438d0ae3d61"),
        "firstName": "Tracy",
        "lastName": "O'Ryan",
        "email": "RyanT@gmail.com",
        "phone": "+17021234567",
        "postcode": "20501",
        "isGold": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c23c9c509b0438d0ae3d75"),
        "firstName": "David",
        "lastName": "Murphy",
        "email": "MurphyD@gmail.com",
        "phone": "+17021234566",
        "postcode": "20503",
        "isGold": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c23d0d509b0438d0ae3d83"),
        "firstName": "Damian",
        "lastName": "Roberts",
        "email": "RobertsD@gmail.com",
        "phone": "+17021234564",
        "postcode": "20501",
        "isGold": false,
        "__v": 0
      },
      {
        "_id": new ObjectId("64c4a67c6c924df854bd2b18"),
        "firstName": "dfdfsf",
        "lastName": "fdfff",
        "email": "zahrahayati106@yahoo.com",
        "phone": "17021234567",
        "postcode": "20505",
        "isGold": false,
        "__v": 0
      }
    ];

    await db.collection('customers').insertMany(customersData);
  },

  async down(db, client) {
    await db.collection('customers').deleteMany({});
  }
};
