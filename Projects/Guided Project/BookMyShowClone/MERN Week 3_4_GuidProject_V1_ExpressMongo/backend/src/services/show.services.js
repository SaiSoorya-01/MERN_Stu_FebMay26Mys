const Show = require("../models/Show");
const Movie = require("../models/Movie");

// Generate Seats
const generateSeats = (totalSeats) =>{
    const seats =[];
    const rows = ["A","B","C","D","E","F","G","H"];
    let seatCount = 0;
    for(let row of rows){
        for(let i=1; i<=10; i++){
            if(seatCount>=totalSeats) break;

            seats.push({
                seatNumber:`${row}${i}`,
                isBooked:false,
            });
            seatCount++;
        }
    }
    return seats;
};

// Create Show
exports.createShow = async ({movieId,date,time,totalSeats}) => {
    // check if movie exists
    const movie = await Movie.findById(movieId);
    if (!movie) 
        throw new Error("Movie not found");
    
    // Generate seats
    const seats = generateSeats(totalSeats);

    const show = await Show.create({
        movieId,
        date,
        time,
        totalSeats,
        availableSeats:totalSeats,
        seats,
    });
    return show;
};

// Get show
exports.getShows = async ({movieId,date}) => {
    const filter = {isActive:true};

    if (movieId) filter.movieId = movieId;
    if (date) filter.date = new Date(date);
    
    const show = await Show.find(filter)
        .populate("movieId")
        .sort({date:1});

    return this.getShows;
};

// Get show by Id
exports.getShowsById = async (Id) => {
    const show = await Show.findById.populate("movieId");
    if(!show)
        throw new Error("Show not found");

    return show;
};

// Update the show 
exports.updateShow = async (id,date) => {
    const show = await Show.findByIdAndUpdate(id,date,{
        returnDocument: "after",
        runValidators:true,
    });
    if(!show)
        throw new Error("Show not found");

    return show;
};

// Delete show -->soft delete
exports.deleteShow = async (id,) => {
    const show = await Show.findByIdAndUpdate(id,{
       isActive:false,
    });
    if(!show)
        throw new Error("Show not found");
};

