const { Router } = require('express')
const {addUser, listUsers, findUserByEmail} = require('./controller')

const router = Router()

router.post('/', async (req, res) =>{
    console.log(req.body)
   const userCreated = await addUser(req.body);
   if (userCreated){
    res.status(201).json(userCreated)
   }else{
    res.status(500).json({
        "error": "Usuario no creado"
    })
   }
})

router.get('/', async (req, res) =>{
    const email = req.query.email;

    if(!email){
        const getAllUsers = await listUsers();
        res.status(201).json(getAllUsers)
    }else {
        const getOne = await findUserByEmail(email);
        res.json(getOne)
    }
});

module.exports = router;