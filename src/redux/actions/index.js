export const buildCar = (car) => {
  return {
    type: "BUILD_CAR",
    payload: car
  }
};

export const pickColor = (color) => {
  return {
    type: "PICK_COLOR",
    payload: color 
  }
};

export const pickEngine = (engine) => {
  return {
    type: "PICK_ENGINE",
    payload: engine
  }
};