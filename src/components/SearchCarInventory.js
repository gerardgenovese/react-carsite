import React from "react";


class SearchCarInventory extends React.Component {

  state = {
    inventoryOptions: ["one"],
    sliderPrice: ""
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  getInventoryOption = (e) => {

    let newInventory = this.state.inventoryOptions.slice();

    if(e.target.checked === true){
      newInventory.push(e.target.value);
      this.setState({ inventoryOptions: newInventory });
    } else {
        newInventory = newInventory.filter(item => item !== e.target.value)
        this.setState({ inventoryOptions: newInventory });
    }

  };


  getRange = (e) => {
    this.setState({ sliderPrice: e.target.value })
    console.log(e.target.value);
  };

  render(){
    //Slice first letter of car name and Capitalize then add the rest of string to create a Capitalized car name
    const car = this.props.location.state.car.slice(0,1).toUpperCase() + this.props.location.state.car.slice(1);
    const carPrice = this.props.location.state.price;
    console.log("ci", this.props)


    let addRemoveOptions = this.state.inventoryOptions.map((e, i ) => {
      return (
        <div key={i}className="carInv-selected--flex">
          <div className="carInv-selected--options">{e}</div>
          <div className="carInv-selected--options-close">X</div>
        </div>
      )
    });

    return(
      <div className="carInv">


        <div className="build_price-header">2019 {car} Inventory</div>

        <div className="carInv-mainFlex">
          <div className="carInv-leftContainer">
            <div className="carInv-filter-groupHeader">
              <div>Filters</div>
              <div>Clear All</div>
            </div>
         

            <div>
              <div className="carInv-checkbox">

                <div className="carInv-tab">
                  <input type="checkbox" id="main-header1"className="carInv-tab--header" />
                  <label htmlFor="main-header1" className="carInv-tab--header-label">Model Trims</label>
                  <div className="carInv-tab--content">
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-model1" className="carInv-tab--content-input" value="L" onChange={this.getInventoryOption}/>
                      <label htmlFor="car-model1" className="carInv-tab--content-label">L</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-model2" className="carInv-tab--content-input" value="LE" onChange={this.getInventoryOption}/>
                      <label htmlFor="car-model2" className="carInv-tab--content-label">LE</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="car-model3" className="carInv-tab--content-input" value="Hybrid LE" onChange={this.getInventoryOption}/>
                      <label htmlFor="car-model3" className="carInv-tab--content-label">Hybrid LE</label>
                    </div>
                  </div>
                </div>

                <div className="carInv-tab">
                  <input type="checkbox" id="main-header2"className="carInv-tab--header" />
                  <label htmlFor="main-header2" className="carInv-tab--header-label">Engine</label>
                  <div className="carInv-tab--content">
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="engine-acc1" className="carInv-tab--content-input" value="8 Speed Automatic" onChange={this.getInventoryOption}/>
                      <label htmlFor="engine-acc1" className="carInv-tab--content-label">2.5 4-Cyl 8 speed Automatic</label>
                    </div>
                    <div className="carInv-tab--content-flex">
                      <input type="checkbox" id="engine-acc2" className="carInv-tab--content-input" value="8 Speed Manual" onChange={this.getInventoryOption}/>
                      <label htmlFor="engine-acc2" className="carInv-tab--content-label">2.5 4-Cyl 8 speed Manual</label>
                    </div>
                  </div>
                </div>

                <div className="carInv-tab">
                  <input type="checkbox" id="main-header3"className="carInv-tab--header" />
                  <label htmlFor="main-header3" className="carInv-tab--header-label">Price</label>
                  <div className="carInv-tab--content range">
                    <input type="range" id="price-range" className="range-input" min={carPrice} max={carPrice + 5000} onChange={this.getRange}/>
                    <div className="range-price--flex">
                      <div>{carPrice}</div>
                      <div>{carPrice + 5000}</div>
                    </div>
                  </div>
                </div>
               


               
              </div>
            </div>
















          </div>
          <div className="carInv-rightContainer">
            <div className="carInv-pricepoint--header">
              <div>34 Matches</div>
                <form>
                  <select name="pricepoint">
                    <option value="">Price: Low To High</option>
                    <option value="">Price: High To Low</option>
                  </select>
                </form>
            </div>
            {this.state.inventoryOptions.length === 0 ? <div></div> : <div>{addRemoveOptions}</div>}
          </div>
        </div>

      </div>
    )
  }
}

export default SearchCarInventory;