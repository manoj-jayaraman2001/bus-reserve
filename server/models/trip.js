import mongoose from 'mongoose';

// Define the Trips schema
const tripsSchema = new mongoose.Schema({
  date: {
    type: Number,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  busOwnerID: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  EndTime: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  SeatBooked: [{
    type: String,
  }],
  bus_no: {
    type: Number,
  },
  amenities_list: [{
    type: String,
  }],
  busFare: {
    type: Number,
    required: true,
  },
  busName: {
    type: String,
    required: true,
  },
});

// Create the Trips model
const Trips = mongoose.model('Trips', tripsSchema, 'trips');

export default Trips;
