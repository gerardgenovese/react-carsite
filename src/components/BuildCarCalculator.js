import React from "react";

class BuildCarCalculator extends React.Component {

  state = {
    carPrice: 0,
    interest: 0,
    yearsToRepay: 0
  }

  componentWillMount(){
    this.setState({carPrice: this.props.carPrice})
  }

userInputPrice = (e) => {
  let value = e.target.value;

  this.setState({carPrice: value})
  console.log(value);
};

computePayments = () => {
  const principal = this.state.carPrice;

};


  render(){
    console.log(this.state.carPrice);
    return(
      <div>

        <h1>Loan Calculator</h1>
        <form>
          <input defaultValue={this.state.carPrice} type="number" id="amount" placeholder="Loan Amount" onChange={this.state.userInputPrice}/>


          <input type="number" id="interest" placeholder="Interest" />
          <input type="number" id="years" placeholder="Years to Repay" />
          <input type="submit" value="Calculate" />
        </form>
      </div>
    )
  }
}

export default BuildCarCalculator;