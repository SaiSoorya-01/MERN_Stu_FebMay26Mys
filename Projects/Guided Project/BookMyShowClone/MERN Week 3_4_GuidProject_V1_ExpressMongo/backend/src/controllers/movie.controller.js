const movieService = require("../services/movie.service");

// Create Movie
exports.createMovies = async (req,res,next) => {
        try{
            const movie = await movieService.createMovies(req.body);
            res.status(201).json({
                success:true,
                message:"Movie created successfuly",
                data:movie,
            });
        }catch(error){
            next(error);
        }
};

// get Movie
exports.getMovies = async (req,res,next) => {
        try{
            const result = await movieService.getMovies(req.body);
            res.status(201).json({
                success:true,
                message:"Movie list featched",
                data:result,
            });
        }catch(error){
            next(error);
        }
};

// update Movie
exports.updateMovies = async (req,res,next) => {
        try{
            const movie = await movieService.updateMovies(
                req.body,
                req.params.id
            );

            res.status(200).json({
                success:true,
                message:"Movie uodated successfuly",
                data:movie,
            });
        }catch(error){
            next(error);
        }
};

// Delete Movie
exports.deleteMovies = async (req,res,next) => {
        try{
            await movieService.deleteMovies(req.body);

            res.status(200).json({
                success:true,
                message:"Movie deleted successfuly",
            });
        }catch(error){
            next(error);
        }
};