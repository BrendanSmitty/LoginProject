require("dotenv").config()
const mongoose = require("mongoose")
const App = require("./models/apps")
const fs = require("fs")

const rawData = fs.readFileSync("./sample.json")
const data = JSON.parse(rawData)

data.apps.map(record => {
    console.log(record)
    const newApp = new App({
        name: record.name,
        description: record.description,
        details: record.detials,
        apk: record.apk,
    })
    newApp.save().then(result => {
        console.log("App record saved")
    })
})
