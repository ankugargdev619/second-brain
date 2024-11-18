import mongoose from 'mongoose';
import {Tag} from "./tag.model";
import {User} from "./user.model";

const contentSchema = new mongoose.Schema({
    type : {
        required : true,
        type : String,
        enum : ['document','tweet','youtube','link'], //
    },
    link : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    tags : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : Tag
    }],
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : User,
        required : true
    }
})

export const Content = mongoose.model('content',contentSchema);