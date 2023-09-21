import Trips from '../models/trip.js'

async function getTrips(req, res) {
  try {
    const trips = await Trips.find();
    res.json(trips);
  } catch (err) {
    res.json(err.message);
  }
}

async function addTrip(req, res) {
    const newTripData = req.body;
    try {
        const dataInserted = await Trips.insertOne(newTripData)
        res.json({data: dataInserted})
    }catch(err){
        res.json(err.message)
    }
}

export { getTrips, addTrip };
