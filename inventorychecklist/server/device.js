const {MongoClient, Int32, Schema} = require('mongodb');


const deviceSchema = new Schema({
    ID: {
        type: Int32, 
        required: true
    }, 
    type: {
        type: String, 
        required: true
    }, 
    brand: {
        type: String, 
        required: true
    },
    serialNum: {
        type: String, 
        required: true
    }
})

const Device = MongoClient.model("Device", deviceSchema);
module.exports = Device;