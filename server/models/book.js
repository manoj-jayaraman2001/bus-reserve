import mongoose from "mongoose";

// Define the BusDetails schema
const bookedSchema = new mongoose.Schema({
  passengerName: {
    type: String,
    required: true,
  },
  bus_no: {
    type: Number,
    required: true,
  },
  seatNo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  EndTime: {
    type: Date,
    required: true,
  },
  busFare: {
    type: Number,
    required: true,
  },
  busName: {
    type: String,
    required: true,
  },
});

// Create the BusDetails model
const Book = mongoose.model("Book", bookedSchema, "booking");

export default Book;
