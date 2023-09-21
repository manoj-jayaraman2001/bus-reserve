
import { Router } from "express";
import { getTrips } from "../controllers/trips.js";


const router = Router()


router.get('/get-all-trips', getTrips )

export default router