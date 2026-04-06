// cancel.js
// to cancle the existing booking if exists
const bookingEmitter = require("./events");
const {getCurrentBooking,cleareCurrentBooking, clearCurrentBooking} = require("./booking");

function cancelBooking(movies){
    const booking = getCurrentBooking();

    if(!booking){
        bookingEmitter.emit("bookingFailed","No booking to cancel.");
        return null;
    }

    const Movie = movies.find((m)=>m.id === booking.movieId);
    if(!Movie){
        bookingEmitter.emit("bookingFailed","movie data not found white cancelling booking");
        return null;
    }
    const showtime = movie.showtimes.find((show)=>show.time.toLowerCases()===booking.time.toLowerCases());
    if(!showtime){
        bookingEmitter.emit("bookingFailed","showtime data not found");
        return null;
    }
    // restore seats
    showtime.seatsAvailable +=booking.seatCount;

    // Clear current Booking
    clearCurrentBooking();

    bookingEmitter.emit("bookingCancelled",booking);

    return booking;

}

module.exports = {
    cancelBooking
};