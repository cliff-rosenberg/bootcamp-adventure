const db = require('../config/connection');
const { enterModelsHere } = require('../models');

const myData = require('./modelsData.json');

db.once('open', async () => {
  await enterModelsHere.deleteMany({});

  const models = await enterModelsHere.insertMany(myData);

  console.log('The database was seeded!');
  process.exit(0);
});
