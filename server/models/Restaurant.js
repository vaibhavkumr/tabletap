const { readDB, writeDB } = require('../db');
const getRestaurants = async () => (await readDB()).restaurants;
const getRestaurant = async (id) => (await readDB()).restaurants.find(r => r.id === id);
const saveRestaurant = async (restaurant) => {
  const db = await readDB();
  db.restaurants.push(restaurant);
  await writeDB(db);
};
const updateFloorPlan = async (id, floorPlan) => {
  const db = await readDB();
  const restaurant = db.restaurants.find(r => r.id === id);
  restaurant.floorPlan = floorPlan;
  await writeDB(db);
};
module.exports = { getRestaurants, getRestaurant, saveRestaurant, updateFloorPlan };