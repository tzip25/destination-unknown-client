import React from 'react'
import Flight from './Flight'

const PurchaseFlight = (props) => {
    const flight = (props.location.state.flight)
    console.log(flight)

    return (
      <div >
        <Flight flight={flight}/>

      </div>
    )
}

export default PurchaseFlight
