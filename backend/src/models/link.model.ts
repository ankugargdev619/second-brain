import mongoose from 'mongoose';
import { User } from './user.model';

const linkSchema = new mongoose.Schema({
    hash : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : User,
        required : true
    }
});

export const Link = mongoose.model('link',linkSchema);