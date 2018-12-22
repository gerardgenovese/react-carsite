export default (selectedColor = "", action) => {
  if(action.type === "PICK_COLOR"){
    return action.payload;
  }
  return selectedColor;
}