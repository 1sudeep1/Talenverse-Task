//importing the model
const Contact = require('../models/contactModel')

const contactUser= async(req, res)=>{
    try{
        const existingContact = await Contact.findOne({
            $or: [
                { email: req.body.email },
                { phone: req.body.phone }
            ]
        });        
        if(existingContact){
            return res.status(403).json({msg:'Contact already registered'})
        }else{
            await Contact.create(req.body)
            res.send({ msg: 'Contact registered successfully' })
        }
    }catch(err){
        console.log(err)
    }
}
module.exports = {contactUser}