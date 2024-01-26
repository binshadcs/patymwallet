const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:Admin125@cluster0.vmw0pq2.mongodb.net/paytm');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        unique : true
    },
    firstname : String,
    lastname : String,
    password : String
})

const accountSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    },
    balance : {
        type : Number,
        require : true
    }
})

const User = mongoose.model('User', userSchema);
const Accounts = mongoose.model('Accounts', accountSchema);

module.exports = {User, Accounts}














// mongodb+srv://admin:Admin125@cluster0.vmw0pq2.mongodb.net/