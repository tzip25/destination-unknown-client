import React from "react";
const airports = require('airport-data')

class BookFlightForm extends React.Component {

  state = {
    departure: "",
    date: "",
    budget: "",
    currency: "USD"
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDateChange = (e) => {
    let dateArr = e.target.value.split('-').reverse()
    this.setState({
      date: dateArr.join('/')
    })
  }

  setCurrency = (e) => {
    this.setState({
      currency: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearchFlight(this.state)
  }

  render(){
    console.log(airports)
    return(
      <form onSubmit={this.handleSubmit} className="ui form" id="search-form" >
        <div id="currency-dropdown" className="field">
          <select className="ui search dropdown" onChange={this.setCurrency}>
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
          </select>
        </div>

        <div className="three fields">
          <div className="field">
            <label>Departure City</label>
            <div className="ui disabled icon input">
              <i className="paper plane icon"></i>
              <input onChange={this.handleChange} value={this.state.departure} name={"departure"} placeholder="Departure City" />
            </div>
          </div>
          <div className="field">
            <label>Departure Date</label>
            <input type="date" onChange={this.handleDateChange} name={"date"} placeholder="Date" />
          </div>
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
