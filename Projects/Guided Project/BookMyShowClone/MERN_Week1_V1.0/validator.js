// Callback based validation functions

function validateMovieSelection(movies,movieId,Callback){
    const selectedMovie = movies.find((movie)=>movie.id === movieId);

    if(!selectedMovie){
        return Callback("Invalid movie selection.choose a valid movie ID.",null);
    }
    Callback(null,selectedMovie);
}

function validateTimeSelection(movies,selectedTime,Callback){
    const selectedShowtime = movie.showtimes.find((show)=>show.time.toLowerCases()===selectedTime.toLowerCases());

    if(!selectedShowtime){
        return Callback("Invalid time slot selection.choose a valid Time slot.",null);
    }
    Callback(null,selectedShowtime);
}

function validateSeatCount(seatCount,Callback){
    if(!isNaN(seatCount)|| seatCount<=0){
        return Callback("Invalid seatCount.Enter a valid Seat Count .",null);
    }
    Callback(null,seatCount);
}

module.exports = {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};