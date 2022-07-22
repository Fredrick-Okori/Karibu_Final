const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,

    },
  

});

// Export Model
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("User", UserSchema);

