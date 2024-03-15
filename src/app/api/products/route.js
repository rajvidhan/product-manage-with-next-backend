import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/DB/model/product";

// get method 
export async function GET() {
 let data= [];
  try{
    await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("hello connect ho gya hu bhai jai ho"))
    .catch((err) =>
      console.log("nhi hu bhai dekhle connect or ye dekh error " + " " + err)
    );

    data = await Product.find();
  
  }catch(err){

    return NextResponse.json({
      message:false,
      
  })
  
  }
  

  return NextResponse.json({
    message:true,
    data:data
})

}


export async function POST(req){
const data  = await req.json();
 
    // connect the mongodb
    await mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log("hello connect ho gya hu bhai"))
    .catch((err) =>
      console.log("nhi hu bhai dekhle connect or ye dekh error " + " " + err)
    );

    let product  = await Product.create({
        name:data.name,
        price:data.price,
        color:data.color,
        categry:data.category,
        company:data.company
    });

    
    return NextResponse.json({
        message:true,
        data:product
    })

}
