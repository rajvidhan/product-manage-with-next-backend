import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String
    },
    color:{
        type:String
    },
    company:{
        type:String
    },
    categry:{
        type:String
    }
});
export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

  