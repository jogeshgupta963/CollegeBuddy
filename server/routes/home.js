const express = require('express');
const path = require('path')
const { jwtVerify } = require('../helper/authHelper')

const homeRouter = express.Router();

//@route /api/v1/home
homeRouter
    .route("/")
    .get(jwtVerify, (req, res) => {
        // res.sendFile("C:\\Users\\JOGESH\\OneDrive\\Documents\\GitHub\\hackTu\\client\\home.html")
        res.sendFile(path.join(__dirname, "../../client/home.html"))
    })
homeRouter
    .route('/activities')
    .get(jwtVerify, (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/activities.html"))
    })

module.exports = homeRouter;