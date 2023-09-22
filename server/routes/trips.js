
import { Router } from "express";
import { getTrips, addTrip, getTripsByDate } from "../controllers/trips.js";


const router = Router()


router.get('/get-all-trips', getTrips )
router.get('/get-trips', getTripsByDate)
router.post('/create-trip', addTrip )

export default router