import React from "react";

//capitalize our car model name
export const Capitalize = (str) => str.slice(0,1).toUpperCase() + str.slice(1);


//takes our price argument, a number and turns it into a string adding $ and ,  IE 30000 turns into $30,000
export const CarPriceToString = (num) => {
  let total = num.toString();
  return <div>${total.slice(0,2)},{total.slice(2)}</div>;
};
  
//for build/price and search inventory which are basically two of the same pages we need to replicate *as shown* price of car as cars shown here on toyota site have 'accessories' included. We take our extra costs and factor them in here to create an *as shown* price in the UI. These numbers are randomely generated but are appropriate price points considering the options.
export const CreateAsShownPriceRandomly = (price) => {
  let engine = 500;
  let cargoTote = 75;
  let leatherMats = 75;
  let wheelLocks = 75;

  let engineIncluded = Math.round(Math.random() * 1);
  let cargoToteIncluded = Math.round(Math.random() * 1);
  let leatherMatsIncluded = Math.round(Math.random() * 1);
  let wheelLocksIncluded = Math.round(Math.random() * 1);

  let totalPrice = price;

  if(engineIncluded === 1) totalPrice += engine;
  if(cargoToteIncluded === 1) totalPrice += cargoTote;
  if(leatherMatsIncluded === 1) totalPrice += leatherMats;
  if(wheelLocksIncluded === 1) totalPrice += wheelLocks;

  return totalPrice;

};

//generic gallons per mile
export const Miles = (model) => {
  switch(model){
    case "camry":
      return "29/32";
     case "86":
      return "22/28";
    case "corolla":
      return "28/35";
    case "avalon":
      return "25/30";
    case "yaris":
      return "30/35";
    default:
      return model
  }
};

