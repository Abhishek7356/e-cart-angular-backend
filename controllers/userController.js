const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    // console.log("inside router")
    // console.log(req.body)
    try {
        const existUser = await User.findOne({ email: req.body.email });
        // console.log(existUser)
        if (existUser) {
            res.status(501).json("User allready registered")
        } else {
            const newUser = new User(req.body);
            const response = await newUser.save();
            // console.log(response)
            res.status(200).json(response)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (user) {
            if (user.password == password) {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY);
                console.log(token)
                res.status(200).json({ user, token })
            } else {
                res.status(502).json("Incorrect password")
            }
        } else {
            res.status(501).json("User not found, please register")
        }
    } catch (err) {
        res.status(500).json(err)
    }
}