const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.js");

const db = {
  Op: Sequelize.Op
};

// Create Sequelize.
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT
});

// Include models.
db.user = require("../models/user.js")(db.sequelize, DataTypes);

// Include a sync option with seed data logic included.
db.sync = async () => {
  // Sync schema.
  await db.sequelize.sync({force: true});

  // Can sync with force if the schema has become out of date - note that syncing with force is a destructive operation.
  // await db.sequelize.sync({ force: true });
  
  await seedData();
};

async function seedData() {
    const count = await db.user.count();

    // Only seed data if necessary.
    if(count > 0)
        return;

    const argon2 = require("argon2");

    let hash = await argon2.hash("baohoang", { type: argon2.argon2id });
    const user1 = {
        userID: "U004",
        userEmail: "baohoang@gmail.com",
        userPasswordHashed: hash,
        userFirstName: "Bao",
        userLastName: "Hoang",
        userPhone: "0456775093",
        userDOB: "2003-12-26",
        userPostCode: 3000,
        userIsSubscribe: true,
        userPoint: 1000
    }
    await db.user.create(user1);

    hash = await argon2.hash("hongduong", { type: argon2.argon2id });
    const user2 = {
        userID: "U006",
        userEmail: "hongduong@gmail.com",
        userPasswordHashed: hash,
        userFirstName: "Duong",
        userLastName: "Hong",
        userPhone: "0123675887",
        userDOB: "2003-01-01",
        userPostCode: 3001,
        userIsSubscribe: true,
        userPoint: 700
    }
    await db.user.create(user2);

    hash = await argon2.hash("randompeople", { type: argon2.argon2id });
    const user3 = {
        userID: "U005",
        userEmail: "randompeople@gmail.com",
        userPasswordHashed: hash,
        userFirstName: "Random",
        userLastName: "People",
        userPhone: "0123456789",
        userDOB: "2000-01-01",
        userPostCode: 3054,
        userIsSubscribe: false,
        userPoint: 0
    }
    await db.user.create(user3);
}

module.exports = db;
