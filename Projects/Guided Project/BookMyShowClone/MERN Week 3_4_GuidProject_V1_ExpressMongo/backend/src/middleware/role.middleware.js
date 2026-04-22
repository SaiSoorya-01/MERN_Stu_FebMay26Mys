// Role midlleware: RBAC
exports.authorize = (...roles)=>{
    return(req,res,next)=>{
        if (!req.user || !roles.include(req.user.role)) {
            return res.status(403).json({
                success:false,
                message:"Access denied: Insufficient permission",
            });
        }
        next();
    };
};