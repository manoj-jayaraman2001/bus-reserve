import Book from "../models/book.js";
import Trips from "../models/trip.js";
export async function bookSeat(req, res) {
  const { passengerName, bus_no, seatNo, date } = req.body;

  try {
    const {from, to, startTime, EndTime, busName, busFare} = await Trips.findOne({ bus_no: bus_no });
    await Trips.findOneAndUpdate(
      { bus_no: bus_no },
      { $push: { SeatBooked: seatNo } },
      { new: true }
    );
    const bookingDetails = new Book({
      passengerName: passengerName,
      date: date,
      bus_no: bus_no,
      seatNo: seatNo,
      from: from,
      to: to,
      startTime: startTime,
      EndTime: EndTime,
      busName: busName,
      busFare : busFare
    });
    await bookingDetails.save()
    res.status(200).json(bookingDetails)
  } catch (err) {
    res.status(500).json(err.message);
  }
}
