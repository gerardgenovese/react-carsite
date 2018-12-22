const allCars = () => {
  return [
    { 
      title: "corolla", 
      img: "/images/corolla/sidefront/red.jpg",
      carAngle: 0,
      color:"red",
      engine: 0,
      price: 20000
      
    },
    { 
      title: "t86", 
      img: "/images/t86/sidefront/white.jpg",
      carAngle: 0,
      color:"white",
      engine: "0",
      price: 25000
    }
  ]
};



const buildCarReducer = (selectedCar = {}, action) => {
  if(action.type === "BUILD_CAR"){
    return action.payload;
  } 
  return selectedCar;
};

export { allCars, buildCarReducer };