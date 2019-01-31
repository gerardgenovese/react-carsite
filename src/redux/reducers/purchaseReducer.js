export default (purchase = {}, action) => {
  if(action.type === "PURCHASE_SELECTIONS"){
    return action.payload;
  }
  return purchase;
}