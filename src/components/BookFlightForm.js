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
      <form onSubmit={this.handleSubmit} className="ui form" id="search-form" >
        <div className="three fields">
          <div className="field">
            <label>Departure City</label>
            <input onChange={this.handleChange} value={this.state.departure} name={"departure"} placeholder="Departure City" />
          </div>
          <div className="field">
            <label>Departure Date</label>
            <input type="date" onChange={this.handleChange} value={this.state.date} name={"date"} placeholder="Date" />
          </div>
          <div className="field">
            <label>Max Budget</label>
            <input type="number" onChange={this.handleChange} value={this.state.budget} name={"budget"} placeholder="Budget" />
          </div>
        </div>
          <button id="searchflight-button" className="ui button blue">Find Me a Destination!</button>
      </form>
    )
  }
}

export default BookFlightForm
