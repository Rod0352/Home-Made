const mongoose = require('mongoose');
const {Buisness} = require('../models')

mongoose
  .connect('mongodb://localhost/homemade', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongo connected !');
  })
  .catch((err) => {
    console.log(err);
  });

const seedProducts = [

  {
    "buisnessId": "1",
    "buisnessName": "Lasting Finish",
    "buisnessOwner": "Rodney",
    "email": "rodney@email.com",
    "cost": 2,
    "description": "super nice"

  },
  {
    "buisnessId": "2",
    "buisnessName": "Burger PLace",
    "buisnessOwner": "amy",
    "email": "amy@email.com",
    "cost": 3,
    "description": "amazing!!!"

  },
  {
    "buisnessId": "3",
    "buisnessName": "WaterPark",
    "buisnessOwner": "Kronos",
    "email": "kronos@email.com",
    "cost": 2,
    "description": "Not bad!!"

  }


]
const seeds = async () => {
  await Buisness.deleteMany({});
  await Buisness.insertMany(seedProducts);
};

seeds().then(() => {
  mongoose.connection.close();
});

