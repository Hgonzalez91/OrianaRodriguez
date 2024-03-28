const { Router } = require('express');
const passport = require('passport');
const {validateRole} = require('../../middleware/index');

const router = Router()

router.post('/login', 
    passport.authenticate('local', {session: false}), 
    validateRole,
    async (req, res, next) =>{
        try {
            const user = req.user;
            res.json({"usuario": user})
        } catch (error) {
           next(error);
        }
    }
)

module.exports = router;