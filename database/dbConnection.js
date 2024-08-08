import { connect } from "mongoose";

export const dbConn = connect('mongodb://localhost:27017/mvc-app')
.then(()=>{
    console.log('database connected successfully');
})