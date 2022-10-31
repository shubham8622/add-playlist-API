const mongoose = require('mongoose');
const DB = "mongodb+srv://playlist:playlists@cluster0.ce3srje.mongodb.net/playlist?retryWrites=true&w=majority";
mongoose.connect(DB).then(()=>{
    console.log("Connection Successfull");
}).catch((error)=>{
    console.log("no connection");
});