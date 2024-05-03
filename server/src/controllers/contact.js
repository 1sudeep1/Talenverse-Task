const Contact = require('../models/contactModel');

const contactUser = async (req, res) => {
    try {
        const existingContact = await Contact.findOne({
            $or: [
                { email: req.body.email },
                { phone: req.body.phone }
            ]
        });

        if (existingContact) {
            return res.status(403).json({ msg: 'Contact already registered!!' });
        } else {
            await Contact.create(req.body);
            return res.status(200).json({ msg: 'Contact registered successfully!!' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Contact already registered!!' });
    }
};

//exporting the contact controller
module.exports = { contactUser };
