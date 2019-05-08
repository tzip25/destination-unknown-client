import React from "react";
// const airports = require('airport-data')

class BookFlightForm extends React.Component {

  state = {
    departure: "",
    date: "",
    returnDate: "",
    budget: "",
    currency: "USD",
    roundTrip: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDateChange = (e) => {
    let dateArr = e.target.value.split('-').reverse()
    this.setState({
      [e.target.name]: dateArr.join('/')
    })
  }

  setCurrency = (e) => {
    this.setState({
      currency: e.target.value
    })
  }

  setRoundTrip = () => {
    this.setState(prevState => {
      return {
        roundTrip: !prevState.roundTrip
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearchFlight(this.state)
  }

  render(){
    // console.log(airports)

    return(
      <form onSubmit={this.handleSubmit} className="ui form" id="search-form" >
        <div className="two fields">
          <div id="currency-dropdown" className="field">
            <select className="ui search dropdown" onChange={this.setCurrency}>
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
            </select>
          </div>
          <div id="roundTrip-dropdown" className="field">
            <select className="ui search dropdown" onChange={this.setRoundTrip}>
              <option>One Way</option>
              <option>Round Trip</option>
            </select>
          </div>
        </div>

        <div className={this.state.roundTrip ? "four fields" : "three fields"}>
          <div className="field">
            <label>Leaving From</label>
            <div className="ui disabled icon input">
              <i className="paper plane icon"></i>
              <input onChange={this.handleChange} value={this.state.departure} name={"departure"} placeholder="Departure City" />
            </div>
          </div>
          <div className="field">
            <label>Departure Date</label>
            <input type="date" onChange={this.handleDateChange} name={"date"} placeholder="Date" />
          </div>
          {this.state.roundTrip &&
          <div className="field">
            <label>Return Date</label>
            <input type="date" onChange={this.handleDateChange} name={"returnDate"} placeholder="Date" />
          </div>
          }
          <div className="field">
            <label>Max Budget</label>
            <div className="ui disabled icon input">
              <i className="dollar icon"></i>
              <input type="number" onChange={this.handleChange} value={this.state.budget} name={"budget"} placeholder="Budget" />
            </div>
          </div>
        </div>
          <button id="searchflight-button" className="ui button yellow">Find a Destination!</button>
      </form>
    )
  }
}

export default BookFlightForm
