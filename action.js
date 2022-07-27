// What is Action
// Actions are the plain functions
// Get Data from React js
// Send Data to Reducer after Process
// Must Have type key in Return statement
// Must Sync type with Reducer
// step 30 next goto line no 19
import{ Add_to_Cart }from "./constant"
// step 8
//step 18(data)  kya yee hmra data react se data redux me  send krna aaction kaa kaam hota hai

export const addToCart = (data) => {
  //   step 19
  console.log("action Called", data);
  return {
    // step 15 type string chahiye like -"Add_to_Cart" 
    // type: "Add_to_Cart",
    dataa: "One item",
    // *step 31 change type to eassy code krne ke liye according to const file :)*
    type:Add_to_Cart ,
    // step 20
    data,
  };
};
