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
          <th>Departure Date</th>
          <th>Return Date</th>
          <th>Departure</th>
          <th>Arival</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{flight.airline}</td>
          <td>{null}</td>
          <td>{null}</td>
          <td>{flight.start_location}</td>
          <td>{flight.end_location}</td>
          <td>{flight.price}</td>
        </tr>
      </tbody>
    </table>
    {props.button ? <button className="ui button" onClick={handleClick}>Save Flight</button> : null}
    </div>
  )
}

export default Flight
