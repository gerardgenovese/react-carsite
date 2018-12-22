export default (selectedEngine = "0", action) => {
  if(action.type === "PICK_ENGINE"){
    return action.payload
  }
  return selectedEngine;
};