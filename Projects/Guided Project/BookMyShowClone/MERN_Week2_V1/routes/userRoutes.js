// fetching the bookings based on user id
const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { bookings } = require("../controllers/bookingController");

const router = express.Router();

// get bookings for specific user id
router.get("/:userId/booking",authMiddleware,(req,res)=>{
    const userId = Number(req.params.userId);

    const userBookings = bookings.filetr((booking)=>booking.userId === userId);

    res.status(200.json({
        success:true,
        count: userBookings.length,
        data: userBookings
    }));
});

module.exports = router;
