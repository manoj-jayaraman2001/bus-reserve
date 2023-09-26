import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import tripRoutes from './routes/trips.js'
import bookingRoutes from './routes/booking.js'
// import Trips from './models/trip.js'
// import stateDistrict from "./models/stateDistrict.js";
// import BusDetails from "./models/bus.js";
// import { trips } from "./data/trips.js";
// import { states } from "./data/states.js";
// import { buses } from "./data/buses.js";
dotenv.config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
  res.send("server is started ");
});

app.use('/trips', tripRoutes)
app.use('/booking', bookingRoutes)



// Mongoose setup
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is listening in ${PORT}`);
    });
    
    // Trips.insertMany(trips)
    // stateDistrict.insertMany(states)
    // BusDetails.insertMany(buses)
  })
  .catch((error) => {
    console.log(error);
  });
