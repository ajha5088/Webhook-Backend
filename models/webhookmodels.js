const mongoose = require('mongoose');
const webHookSchema = new mongoose.Schema({
    id: {
        type:String,
        unique:true,
        required:true
    },
    hits:{
        type:Number
    },

    Content:{
        type:String,
        required:true
    }
});


const webHook = mongoose.model('webHook',webHookSchema);

module.exports = webHook;