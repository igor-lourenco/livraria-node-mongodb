import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:MwPqoXNT46J04s1I@alura.hbob4ap.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;