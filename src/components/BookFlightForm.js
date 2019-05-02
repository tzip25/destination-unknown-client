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
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.departure} name={"departure"} placeholder="Departure City" />
        <input onChange={this.handleChange} value={this.state.date} name={"date"} placeholder="Date" />
        <input onChange={this.handleChange} value={this.state.budget} name={"budget"} placeholder="Budget" />
        <button>Search Flights</button>
      </form>
    )
  }
}

export default BookFlightForm
