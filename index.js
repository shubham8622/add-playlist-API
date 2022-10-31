const express = require("express");
require('./Database/index');
const Playlist = require("./Schema/playlist");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());


app.get('/playlists', async (req,res)=>{
    try{
        const allPlaylists = await Playlist.find();
        res.status(200).send(allPlaylists);
    }catch(e){
        res.status(400).send(error);
    } 
});
app.post('/add',async (req,res)=>{
    const {name,trailer,poster,year} = req.body;
    if(name && trailer && poster && year){
        try{
            const addPlaylist = new Playlist(req.body);
            const data = await addPlaylist.save(); 
            res.status(200).send(data);  
        }
        catch(error){
            res.status(400).send(error);
        }
    }else{
        res.status(400).send("Any of these parameter {name,trailer,poster,year} cannot be null");
    }
});


app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})