const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const cors = require('cors')
app.use(cors())
const fileUpload = require('express-fileupload');
app.use(fileUpload())

const port = process.env.PORT || 5071;

//import { promises as fs } from 'fs'

/*
app.get('/Homepage', (req, res) => {
    res.json('if you see this, then server to client connection works');
    console.log("backend is working, so in theory, front end should receive something from back")
})
*/
const fs = require('fs')
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
    //const jsonUpdate = JSON.stringify(req.body.justUpdate, null, 2); // do this at front end
    console.log('Now wait for writting into db')
    console.log(req.body) 
    /*
    async function main() {
        await writeFile('../src/storage/tem.JSON', jsonUpdate);
        console.info("file created successfully with promisify and async/await")
    }
    main().catch(error => console.error(error))
    */
    return new Promise(function(resolve, reject) {
        fs.writeFile('../src/storage/tem.JSON', JSON.stringify(req.body, null, 2), (err) => {
            if (err) reject(err);
            else resolve('jsonUpdate')
        })
    })
    .then(() => {
        console.log('update parameter Sueccessful!!')
    })
    .catch(err => {console.log('Fail because of ', err)})
    
    /*
    async () => {
        await fs.writeFile('../src/storage/tem.JSON', jsonUpdate)
    .then(() => {
        console.log('update parameter Sueccessful!!')
    })
    .catch(err => {console.log('Fail because of ', err)})
    }
    */
})
//upload file to db
const AWS = require('aws-sdk')
const ec2 = new AWS.S3({  
    accessKeyID: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
app.post("/Homepage/Uploading", (req, res) => {
    const file = req.formData.file;
    const fileName = req.formData.filetitle;
    const fileType = req.formData.filetype;
    const filePath = './storage' + fileName;
    const fileReplace = req.formData.filereplace

    const uploadingEC2 = () => {
    file.mv(filePath, async (err) => {
        if (err) {
            console.log('Failed to upload file');
            return res.status(500).send(err);
        }
        res.render('Uploading', {fileName, fileType, filePath, fileReplace})
        const params = {
            Bucket: 'silexOasis',
            Key: '',
            Body: JSON.stringify(formData, null, 2)
        }
        await ec2.upload(params, err => {
            if (err) {
                console.log('Fail to upload to EC2', err)
            } else {
                console.log('uploading to EC2 !!!')
            }
        })
    })
    }
    uploadingEC2();
})

app.listen(port, () => {console.log(`There you go, now server is running on port: ${port}`)})