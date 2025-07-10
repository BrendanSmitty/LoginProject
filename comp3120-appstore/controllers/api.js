const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs')
const App = require('../models/apps');

const SECRET = process.env.SECRET

const rawData = fs.readFileSync('/sample.json')
const data = JSON.parse(rawData)

const getUser = (username) => {
    return data.users.filter(u => u.username === username)[0]
}

const getTokenForm = request => {

}

const apiRouter = express.Router()

apiRouter.get('/api/apps', (req, res) => {
    App.find({}).then(result => {
        console.log(result)
        res.json(result)
    })
})

apiRouter.post('/api/apps', (req, res) => {
    const token = getTokenForm(req)
    const decodedToken = jwt.verify(token, SECRET)

    if(!token || !decodedToken.id) {
        return res.status(401).json({error: "invalid Token"})
    }

    const body = req.body
    const newApp = {

    }
})

apiRouter.get('/api/apps/:id', (req, res) => {
    App.findById(req.params.id).then(apps => {
      response.json(apps)
    })
  })