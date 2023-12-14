const User = require("../models/userSchema");



const addUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).json({ msg: "user Added", newUser })
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
}
const getUser = async (req, res) => {
    try {
        const newUser = await User.find()
        res.status(200).json({ msg: "get all the users", newUser })
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
}
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({_id:req.params.id},{...req.body})
        if (!user)
            return res.status(404).json({ msg: "user not found" })
        res.status(200).json({ msg: "User update seccesfully", User })
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }

}
const deleteUser = async (req, res) => {
    try {
        const removeUser = await User.findByIdAndDelete(req.params.id);
        if (!removeUser)
            return res.status(404).json({ msg: "user not found" })
        res.status(200).json({ msg: "User delete seccesfully", User: removeUser })
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
}


module.exports = { addUser, getUser, updateUser, deleteUser }


