const { readDB, writeDB } = require('../db');
const saveUser = async (user) => {
  const db = await readDB();
  db.users.push(user);
  await writeDB(db);
};
const findUser = async (email) => (await readDB()).users.find(u => u.email === email);
module.exports = { saveUser, findUser };