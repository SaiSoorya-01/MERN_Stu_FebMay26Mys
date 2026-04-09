// Handles requset related to movie
const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/movieController");
const roleMiddleware = require("../middleware/roleMiddleware");
// sends req to home
router.get("/",getHome);
// sends req to get all movies
router.get("/movies",getAllMovies);
// sends req to get movies based on id
router.get("/movies/:id",getMovieById);

// this will allow the auther to add Movie,sends req to create new movie
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
// this router is used to update the movie by auther,sends reqto update the movie
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
// this is used to delete the movie by the auther,sends req to delete a movie
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie);

module.exports = roleMiddleware;