import React from "react";

const Flight = (props) => {

  const {flight} = props
  const handleClick = () => {
    fetch('http://localhost:3000/flights', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({start_location: flight.start_location, end_location: flight.end_location, date: flight.departure_time, airline: flight.airline})
    })
    .then(res=>res.json())
    .then(console.log)
  }

  return(
    <div id="flight-component" className="ui clearing segments">
      <table className="ui blue table">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Departure City / Airport</th>
            <th>Departure Date/Time</th>
            <th>Arrival Airport</th>
            <th>Arrival Date/Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{flight.airline}</td>
            <td>{flight.start_location} <br/> {flight.start_airport}</td>
            <td>{flight.departure_date} <br/> {flight.departure_time}</td>
            <td>{flight.end_location} <br/> {flight.end_airport}</td>
            <td>{flight.arrival_date} <br/> {flight.arrival_time}</td>
            <td>${flight.price}</td>
          </tr>
          {props.button ? <tr>
          <td colSpan="6">
          <div className="ui right floated button orange" onClick={handleClick}>Book Flight</div></td>
          </tr> : null}
        </tbody>
      </table>
    </div>
  )
}

export default Flight
