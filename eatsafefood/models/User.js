const mongoose = require('mongoose');
const connection = mongoose.connect(
    "mongodb://localhost:27017/final",
    { useNewUrlParser: true },
    () => console.log('Connected to DB!'));

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    city: {
        type: String, 
        required: true
    },
    zipcode: {
        type: Number,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Users', UserSchema);
