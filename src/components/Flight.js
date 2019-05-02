import React from "react";

const Flight = (props) => {

  const {flight} = props
  const handleClick = () => {
    fetch('http://localhost:3000/flights', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({start_location: "JFK", end_location: "DEN", date:"2019-11-10", airline:"Delta"})
    })
    .then(res=>res.json())
    .then(console.log)
  }

  return(
    <div>

    <table className="ui celled table">
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
          <td>{flight.start_location} / {flight.start_airport}</td>
          <td>{flight.departure_time}</td>
          <td>{flight.end_location} / {flight.end_airport}</td>
          <td>{flight.arrival_time}</td>
          <td>${flight.price}</td>
        </tr>
      </tbody>
    </table>
    {props.button ? <button className="ui button" onClick={handleClick}>Save Flight</button> : null}
    </div>
  )
}

export default Flight
