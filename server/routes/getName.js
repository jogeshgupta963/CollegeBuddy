const express = require("express")
const cookieParser = require("cookie-parser")
const { jwtVerify } = require("../helper/authHelper")
const userModel = require('../model/userModel')
const nameRouter = express.Router()

nameRouter.route('/').get(jwtVerify, async (req, res) => {

    // console.log(req.body);
    let data = await userModel.findById(req.body.user)
    res.json(data.name)
})
module.exports = nameRouter;