import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

var moment = require("moment");

// const airports = require('airport-data')

class BookFlightForm extends React.Component {

  state = {
    departure: "",
    placeholderOutDate: null,
    dateFormatted: "",
    placeholderInDate: null,
    returnDateFormatted: "",
    budget: "",
    currency: "USD",
    roundTrip: false,
  }

  handleOutDateChange = (date) => {
    const storedMoment = moment(date).format("DD/MM/YYYY");
    this.setState({
      placeholderOutDate: date,
      dateFormatted: storedMoment
    });
  }

  handleReturnDateChange = (date) => {
    const storedMoment = moment(date).format("DD/MM/YYYY");
    this.setState({
      placeholderInDate: date,
      returnDateFormatted: storedMoment
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //
  // handleDateChange = (e) => {
  //   let dateArr = e.target.value.split('-').reverse()
  //   this.setState({
  //     [e.target.name]: dateArr.join('/')
  //   })
  // }

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
            <DatePicker
              id="datePicker"
              placeholderText={moment(new Date()).format("MM/DD/YYYY")}
              minDate={new Date()}
              selected={this.state.placeholderOutDate}
              onChange={this.handleOutDateChange}
            />
          </div>

          {this.state.roundTrip &&
          <div className="field">
            <label>Return Date</label>
            <DatePicker
              id= "datePicker"
              placeholderText={this.state.placeholderInDate ? moment(this.state.placeholderOutDate).format("MM/DD/YYYY") : moment(new Date()).format("MM/DD/YYYY")}
              selected={this.state.placeholderInDate}
              minDate={this.state.placeholderOutDate}
              onChange={this.handleReturnDateChange}
              />
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
