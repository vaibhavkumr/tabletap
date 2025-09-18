const { readDB, writeDB } = require('../db');
const saveReservation = async (reservation) => {
  const db = await readDB();
  db.reservations.push(reservation);
  await writeDB(db);
};
module.exports = { saveReservation };