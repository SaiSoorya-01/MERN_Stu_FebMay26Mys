const showService = require("../services/show.services");

// Create show: Admin
exports.createShow = async(req,res,next)=>{
    try{
        const show = await showService.createShow(req.body);
        res.status(201).json({
            success:true,
            message:"Show Created succefully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// get shows
exports.getShowes = async(req,res,next)=>{
    try{
        const show = await showService.getShows(req.query);
        res.status(200).json({
            success:true,
            message:"Shows featched succefully",
            data:shows,
        });
    }
    catch(error){
        next(error);
    }
};

// Get Single show
exports.getShoweById = async(req,res,next)=>{
    try{
        const show = await showService.getShowsById(req.params.getShoweById);
        res.status(200).json({
            success:true,
            message:"Show featched succefully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// update show - admin
exports.updateShow = async(req,res,next)=>{
    try{
        const show = await showService.updateShow(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"Show updated succefully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Delete show - admin
exports.deleteShow = async(req,res,next)=>{
    try{
        await showService.deleteShow(req.params.id);
        res.status(200).json({
            success:true,
            message:"Show Deleted succefully",
        });
    }
    catch(error){
        next(error);
    }
};