import React from "react";


class TrimCheckbox extends React.Component {

  state={
    carsArray: [],
    filteredArray: [],
    selectedTrim: [],
    count: 0
  };


  onUserClickTrim = (e) => {
    let combinedTrim = this.state.selectedTrim.slice();
    if(e.target.checked) combinedTrim.push(e.target.value);
    else combinedTrim = combinedTrim.filter(item => item !== e.target.value);
    this.setState(() => ({selectedTrim: combinedTrim}), () => {
      console.log("clicked",this.state.selectedTrim);
      this.propagateCars();
    });
  };

  propagateCars(){
    if(this.props.filteredCars.length > 0){
      this.setState(() => ({ carsArray: this.props.filteredCars }), () => { this.getTrim(this.props.filtered) });
    } else{
      this.setState(() => ({ carsArray: this.props.allCars }), () => { this.getTrim() });
    }


  };


  
  getTrim(arr){
    
  };






  sendFilteredCars = () => {
    console.log("sendFilteredCars",this.state.cars);

    this.props.getFilteredCars(this.state.cars, this.state.trim.length);
  };


  render(){
    // console.log("trimcheckboxstate", this.state);
    return(
      <div className="carInv-tab">
        <input type="checkbox" id="main-header1"className="carInv-tab--header" />
        <label htmlFor="main-header1" className="carInv-tab--header-label">Model Trims</label>
        <div className="carInv-tab--content">
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-model1" className="carInv-tab--content-input" data-type="trim" value="L" onChange={this.onUserClickTrim}/>
            <label htmlFor="car-model1" className="carInv-tab--content-label">L</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-model2" className="carInv-tab--content-input" data-type="trim" value="LE" onChange={this.onUserClickTrim}/>
            <label htmlFor="car-model2" className="carInv-tab--content-label">LE</label>
          </div>
          <div className="carInv-tab--content-flex">
            <input type="checkbox" id="car-model3" className="carInv-tab--content-input" data-type="trim" value="Hybrid LE" onChange={this.onUserClickTrim}/>
            <label htmlFor="car-model3" className="carInv-tab--content-label">Hybrid LE</label>
          </div>
        </div>
      </div>
    )
  }
}

export default TrimCheckbox;







// getTrim(){
//   let newArr = this.state.cars.slice();
//   // newArr = [].concat.apply([], newArr);
//   console.log("newArr", newArr);

//   let selectedTrim = this.state.trim.slice();
//   if(selectedTrim.length > 0){
//     console.log("selectedTrim > 0");
//     if(newArr.length > 0){
//       console.log("newArr > 0");

//       let trimMatches = newArr.filter(car => {
//         return selectedTrim.indexOf(car.trim) !== -1;
//       });

//       if(trimMatches.length === 0 && selectedTrim.length > 0){
//         console.log("trimMatches === 0");
//         newArr = [];
//         // filteredArray = newArr;
//         this.setState({ cars: newArr });
//       } else {
//         console.log("trim matches", trimMatches);
//         newArr = [];
//         // count++;
//         this.setState((prevState) => ({ prevState: prevState + 1 }));
//         newArr.push(trimMatches);
//         // filteredArray = newArr;
//         this.setState({ cars: newArr });
//       }
//     } else {
//       console.log("newArr === 0");
//       let trimMatches = this.state.cars.filter(car => {
//         return selectedTrim.indexOf(car.trim) !== -1;
//       });
//       newArr.push(trimMatches);
//     }

//   } else if(selectedTrim.length === 0 && this.props.filteredCars.length === 0){
//     this.setState({ cars: this.props.allCars, count: 0 });
//   } else{
//     this.setState({ cars: newArr });
//   }
// };
























// onGetTrim(){

//   console.log("trim", this.state.trim);

//   let allCars = this.props.allCars;
//   let filteredCars = this.props.filteredCars;
 
//   let arr;
//   filteredCars > 0 ? arr = filteredCars : arr = allCars;

//   console.log("arr",arr);


//   let selectedTrim = this.state.trim;

//   let newArr = arr.slice();
//   console.log(newArr);
//   // newArr = [].concat.apply([], newArr);

//   // console.log("newArr", newArr);
//   console.log("selectedTrim",selectedTrim);
//   if(selectedTrim.length > 0){
//     console.log("selectedTrim > 0");
//     if(newArr.length > 0){
//       console.log("newArr > 0");

//       let trimMatches = newArr.filter(car => {
//         return selectedTrim.indexOf(car.trim) !== -1;
//       });

//       if(trimMatches.length === 0 && selectedTrim.length > 0){
//         console.log("trimMatches === 0");
//         newArr = [];
//         // filteredCars = newArr;
//         this.setState({ newfilteredCars: newArr });
//         return;
//       } else{
//         console.log("trim matches", trimMatches);
//         newArr = [];
//         // count++;
//         newArr.push(trimMatches);
//         // filteredCars = newArr;
//         this.setState({ newFilteredCars: newArr });
//       }

//     } else {
//       console.log("newArr === 0");
//       let trimMatches = this.state.allCars.filter(car => {
//         return selectedTrim.indexOf(car.trim) !== -1;
//       });
//       return newArr.push(trimMatches);
//     }

//   } else{
//       // // count = 0;
//       // console.log('filtered array', this.state.newFilteredCars);
//       // // return this.state.allCars;
//       // this.props.getFilteredCars(this.state.newFilteredCars);
//       this.setState({ newFilteredCars: this.props.AllCars })
//     }


//   // filteredCars = newArr;
//   // filteredCars = [].concat.apply([], filteredCars);
//   // this.setState({ filteredCars: filteredCars });
//   newArr = [].concat.apply([], newArr);
//   this.setState(() => {
//     return {
//       newFilteredCars: newArr
//     }
//   }, () => {
//     console.log("newfilteredCars", this.state.newFilteredCars);
//     this.sendFilteredCars();
//   });

// };














