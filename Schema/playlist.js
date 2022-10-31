const mongoose = require("mongoose");
const validator = require("validator");
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    trailer:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL")
            }
        },
        unique: true
    },
    poster:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL")
            }
        },
        unique: true
    },
    year:{
        type:Number,
        required:true,
    }
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

module.exports =Playlist;