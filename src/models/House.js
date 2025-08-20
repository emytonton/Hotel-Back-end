import { Schema, model } from "mongoose";


const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    toJSON:{
        virtuals: true
    }
}
);


export default model('House', HouseSchema);