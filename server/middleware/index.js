const validateRole = (req, res, next) => {
    try {
        const userRole = req.user;
        if (userRole.role === "customer"){
            res.json({"mensaje": "Vista de cliente"});
        } else {
            res.json({"mensaje": "Vista del administrador"});
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    validateRole
}