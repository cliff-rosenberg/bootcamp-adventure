const db = require('../config/connection');
const { User, Game } = require('../models');
const userSeeds = require('./userSeeds.json');
const gameSeeds = require('./gameData.json');

db.once('open', async () => {
  try {
    // delete existing data
    await User.deleteMany({});
    await Game.deleteMany({});

    // add in new data
    await User.create(userSeeds);
    await Game.create(gameSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('The database was seeded!');
  process.exit(0);
});
