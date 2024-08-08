import { Schema, model } from "mongoose";



let schema = new Schema({
    name:String,
    price:String,
    description:String
})


export const Product = model('Product',schema)