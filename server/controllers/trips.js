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
  const startTime = new Date(date).toISOString();
  const endTime = new Date(`${date}T23:59:00.000Z`).toISOString();

  // Calculate the start and end dates for the query
  try {
    const allTripsByDate = await Trips.find({
      date: {
        $gte: startTime,
        $lte: endTime,
      },
    });

    res.status(200).json(allTripsByDate);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

// filter trips such as rating, time etc.,
async function filterTrips(req, res) {
  const { from, to, startTime, endTime, busName } = req.query;
  const query = {};

  const filterableParams = ["from", "to", "startTime", "endTime", "busName"];

  for (const param of filterableParams) {
    if (req.query[param]) {
      query[param] = req.query[param];
    }
  }
  // if(query[startTime]){
  //   query[startTime] = new Date(query[startTime])
  //   console.log(query[startTime])
  // }
  const dateString = query["startTime"]
  
  // query["startTime"] = new Date("2023-01-17T18:30:00.000+00:00");
  console.log("2023-01-17T18:30:00.000+00:00");
  console.log(query[startTime])
  try {
    const filteredTrips = await Trips.find(query);
    res.json(filteredTrips);
  } catch (error) {
    res.status(500).json(error.message);
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

export { getTrips, addTrip, getTripsByDate, filterTrips };
