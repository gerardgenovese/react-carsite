import React from "react";
import loading from "../relativeImages/loading.gif";

class BuildCarCalculator extends React.Component {

  state = {
    carPrice: 0,
    interest: 0,
    yearsToRepay: 0,
    userMonthlyPayment: 0,
    userTotalInterest: 0,
    userTotalPayment: 0,
    gifLoading: ""
  };

  componentWillMount(){
    this.setState({carPrice: this.props.carPrice});
  };

userInputPrice = (e) => {
  let value = e.target.value;
  this.setState({ carPrice: value });
  // console.log(value);
};

userInputInterest = (e) => {
  let value = e.target.value;
  this.setState({ interest: value });
};

userInputYearsToRepay = (e) => {
  let value = e.target.value;
  this.setState({ yearsToRepay: value });
};

getPayments = (e) => {
  // const carPrice = this.state.carPrice;
  e.preventDefault();

  //forumulas to calculate
  const principal = this.state.carPrice;
  const calculatedInterest = this.state.interest / 100 / 12;
  const calculatedPayments = this.state.yearsToRepay * 12;

  //monthly payment
  const formula = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * formula * calculatedInterest) / (formula - 1); 

  const monthlyPayment = monthly.toFixed(2);
  const totalInterest = ((monthly * calculatedPayments) - principal).toFixed(2);
  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  this.setState({
    userMonthlyPayment: monthlyPayment,
    userTotalInterest: totalInterest,
    userTotalPayment: totalPayment
  });
 


  this.showPayments();
};

showPayments = () => {
  
  if(this.state.gifLoading === ""){
    this.setState({ gifLoading: loading })
  }
 
  setTimeout(()=> {
    this.setState({ gifLoading: ""})
  },1000);
};


  render(){
    // console.log(this.state.carPrice);
    console.log(this.state.userMonthlyPayment);
    console.log(this.state.userTotalInterest);
    console.log(this.state.userTotalPayment);
    console.log(this.state.gifLoading);
    return(
      <div>

        <h1>Loan Calculator</h1>
        <form onSubmit={this.onSubmit}>
        
          <input defaultValue={this.state.carPrice} type="number" id="amount" placeholder="Loan Amount" onChange={this.userInputPrice}/>


          <input type="number" id="interest" placeholder="Interest" onChange={this.userInputInterest} />
          <input type="number" id="years" placeholder="Years to Repay" onChange={this.userInputYearsToRepay} />
          <input type="submit" value="Calculate" onClick={this.getPayments}/>
        </form>
        <div>
          {
            this.state.gifLoading ? <img src={this.state.gifLoading} alt="loading"/> : 
            <div>
              <div> monthlypayment: {this.state.userMonthlyPayment} </div>
              <div> interest: {this.state.userTotalInterest} </div>
              <div> monthlypayment: {this.state.userTotalPayment} </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default BuildCarCalculator;