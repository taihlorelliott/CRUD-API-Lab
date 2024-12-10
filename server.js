//require the following 
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//connect tswift js file
const Tswift = require('./models/tswift.js')

const cors = require('cors')
app.use(cors())

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Get connected for free with ${mongoose.connection.name} connection!`)
});

//this expects the body of the request to jave json data
app.use(express.json());

//add something to the api (CREATE)
app.post('/tswift', async (req, res) => {
    // res.send('its me hi')
    const addedSong = await Tswift.create(req.body);
    res.json(addedSong)
})

//show array of all objects (READ)
app.get('/tswift', async (req, res)=> {
    const songList = await Tswift.find()
    res.json(songList)
})

//delete a song (DELETE)
app.delete('/tswift/:tswiftId', async (req, res) => {
    const deletedSong = await Tswift.findByIdAndDelete(req.params.tswiftId)
    res.json(deletedSong)
})

//update a song (UPDATE)
app.put('/tswift/:tswiftId', async (req, res) => {
    const updateSong = await Tswift.findByIdAndUpdate(
        req.params.tswiftId,
        req.body,
        {new: true}
    )
    res.json(updateSong)
})



app.listen(3000, () => {
    console.log("The app is running!")
})