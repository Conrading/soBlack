const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 5071;

const fs = require('fs')

/*
app.get('/Homepage', (req, res) => {
    res.json('if you see this, then server to client connection works');
    console.log("backend is working, so in theory, front end should receive something from back")
})
*/
//get data front database(JSON) and send to front
app.get('/Homepage', (req, res) => {
    fs.readFile('../src/storage/storageList.JSON', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        try {
            const playlist = JSON.parse(jsonString)
            res.json(playlist);
            console.log("send the playlist to front") 
        } catch (err) {console.log('Error parsing JSON string:', err)}
    })
})
//update database data after setting parameter
app.post('/Homepage/PlayerParameter', (req, res) => {
    const jsonUpdate = JSON.stringify(req.justUpdate, null, 2);
    async () => {
        await fs.writeFile('../src/storage/tem.JSON', jsonUpdate, err => {
            if (err) {
                console.log('Error writing file ', err)
            } else {
                console.log('successfully!!')
            }
        })}
})
//upload file to db

app.listen(port, () => {console.log(`There you go, now server is running on port: ${port}`)})