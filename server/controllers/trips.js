import Trips from "../models/trip.js";

// get all trips
async function getTrips(req, res) {
  try {
    const trips = await Trips.find();
    res.json(trips);
  } catch (err) {
    res.json(err.message);
  }
}

//get trips by date

async function getTripsByDate(req, res) {
  const { date } = req.query;

  // Convert the date to a JavaScript Date object
  const startTime = new Date(date).toISOString()
  const endTime = new Date(`${date}T23:59:00.000Z`).toISOString();


  // Calculate the start and end dates for the query
  try {
    const allTripsByDate = await Trips.find({
      date: {
        $gte: startTime,
        $lte: endTime 
      }
    });

    res.status(200).json(allTripsByDate);
  } catch (err) {
    res.status(500).json(err.message);
  }
}


async function addTrip(req, res) {
  const newTripData = req.body;

  try {
    const dataInserted = new Trips(newTripData);
    dataInserted.save();
    res.status(200).json({ data: dataInserted });
  } catch (err) {
    res.status(500).json(err.message);
  }
}

export { getTrips, addTrip, getTripsByDate };
