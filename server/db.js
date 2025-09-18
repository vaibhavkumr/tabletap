const fs = require('fs').promises;
const path = require('path');
const dbPath = path.join(__dirname, 'db.json');

const readDB = async () => JSON.parse(await fs.readFile(dbPath, 'utf-8'));
const writeDB = async (data) => fs.writeFile(dbPath, JSON.stringify(data, null, 2));

module.exports = { readDB, writeDB };