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

  handleDateChange = (e) => {
    let  hi = e.target.value.split('-').reverse()
    hi = [hi[0], hi[1], hi[2]] = [hi[1], hi[0], hi[2]]
    this.setState({
      date: hi.join('/')
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const formattedDate = this.state.date.replace(/-/g, '/');
    this.props.handleSearchFlight(this.state)
    // console.log(formattedDate);
  }

  render(){
    console.log(this.state)
    return(
      <form onSubmit={this.handleSubmit} className="ui form" id="search-form" >
        <div className="three fields">
          <div className="field">
            <label>Departure City</label>
            <input onChange={this.handleChange} value={this.state.departure} name={"departure"} placeholder="Departure City" />
          </div>
          <div className="field">
            <label>Departure Date</label>
            <input type="date" onChange={this.handleDateChange} name={"date"} placeholder="Date" />
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
