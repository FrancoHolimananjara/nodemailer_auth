const models = require('../models')

module.exports = {
    // RETRIEVE ALL USER
    AllUser : async (req,res)=>{
        await models.User.findAll()
        .then((users)=>{
            if(users){
                return res.status(200).json({user:users})
            }else{
                return res.status(404).json({error:'Empty user'})
            }
        })
        .catch((err)=>{
            return res.status(500).json({error:err})
        })
    }
}