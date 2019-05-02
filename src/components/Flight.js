import React from "react";

const Flight = (props) => {

  const handleClick = () => {
    fetch('http://localhost:3000/flights', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({start_location_id: 1, end_location_id:2, date:"2019-11-10", airline:"Delta"})
    })
    .then(res=>res.json())
    .then(console.log)
  }

  return(
    <div>
    Render one flight
    <button onClick={handleClick}>Save Flight</button>
    </div>
  )
}

export default Flight
