import React from "react";

class BookFlightForm extends React.Component {

  state = {
    departure: "",
    date: "",
    budget: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearchFlight(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="ui form" id="search-form">
        <div className="field">
          <label>Departure</label>
          <input onChange={this.handleChange} value={this.state.departure} name={"departure"} placeholder="Departure City" />
        </div>
        <div className="field">
          <label>Departure Date</label>
          <input onChange={this.handleChange} value={this.state.date} name={"date"} placeholder="Date" />
        </div>
        <div className="field">
          <label>Budget</label>
          <input onChange={this.handleChange} value={this.state.budget} name={"budget"} placeholder="Budget" />
        </div>
          <button className="ui button">Search Flights</button>
      </form>
    )
  }
}

export default BookFlightForm
