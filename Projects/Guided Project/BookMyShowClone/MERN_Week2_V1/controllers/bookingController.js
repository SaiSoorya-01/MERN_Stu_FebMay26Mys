// 
const movies = require("../data/movies");
const CustomError = require("../utils/CustomError");

const booking = [];

function bookingValidationHandler(req, res, next) {
    const { movieId, showtimeId, seatCount } = req.body;

    if (!movieId || !showtimeId || !seatCount) {
        return next(new CustomError("movieId,showtimeId,seatCount are required.", 404));
    }
    next();
}

function createBooking(req, res, next) {
    try {
        const { movieId, showtimeId, seatCount } = req.body;


        const movie = movies.find((m) => m.id === Number(movieId));
        if (!movie) {
            return next(new CustomError("Movie not found.", 404));
        }
        const showtimes = movies.showtimes.find((s) => s.id === Number(showtimeId));
        if (!showtimes) {
            return next(new CustomError("showTime not found.", 404));
        }
        if (showtimes.seatsAvailable < Number(seatCount)) {
            return next(new CustomError("not enough seats available.", 404));

        }
        showtimes.seatsAvailable-=Number(seatCount);

        const booking = {
        id:booking.length+1,
        userId: req.user.id,
        userName: req.user.name,
        movieId:movie.id,
        movieTitle = movie.title,
        showtimeId:showtime.id,
        showtime:showtime.time,
        seatCount:Number(seatCount)
            };
            booking.push(booking);

        res.status(201).json({
            success:true,
            message:"Booking created successfully.",
            data:booking
        });

    }catch(error){
        next(error);
    }
}

function getAllBookings(req,res,next){
    try{
        res.status(200).json({
            success:true,
            const:booking.length,
            data:booking
        });
    }
    catch(error){
        next(error);
    }
}

function getMyBookings(req,res,next){
    try{
        const userBooking = booking.filter((booking)=>booking.userId === req.user.id);
        res.status(200).json({
            success:true,
            const:userbookings.length,
            data:userbookings
        });
    }
    catch(error){
        next();
    }
}

module.exports={
    bookingValidationHandler,
    createBooking,
    getAllBookings,
    getMyBookings
}