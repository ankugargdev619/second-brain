import mongoose from 'mongoose';

export interface UserInterface extends Document {
    username : string,
    password : string
}

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

export const User = mongoose.model('user',userSchema);