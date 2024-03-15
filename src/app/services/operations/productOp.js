import toast from "react-hot-toast";
import { productEndPoints } from "../api";

const { PRODUCT } = productEndPoints;

export async function AddproductDB(data) {
  let response = await fetch(PRODUCT, {
    method: "POST",
    body: JSON.stringify(data),
  });
  response = await response.json();
  if(response.message){
    toast.success("Product is Added brother");

  }
  console.log(response);
  return response;
}


export async function products() {
  console.log("hello bhai",PRODUCT)
  let response = await fetch(PRODUCT);
  response = await response.json();
  console.log(response)
  if(response.message){
    toast.success("Product is fetch brother");
  }
 
  return response.data;
}
