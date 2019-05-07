import React from 'react'

export default class OneWayContainer extends React.Component {
    state = {
    }

    handleSort = (sortOption) => {
        switch(sortOption){
          case "Price: Low to High":
            return this.sortPriceLowToHigh()
          case "Price: High to Low":
            return this.sortPriceHighToLow()
          case "Departure Time":
            return this.sortDepartureTime()
          case "Arrival Time":
            return this.sortArrivalTime()
          case "City: A-Z":
            return this.sortCity()
          default:
            return this.sortPriceLowToHigh()
        }
    }
  
    sortCity = () => {
      const sortedFlights = [...this.state.flights].sort((a,b) => {
        return a.end_location.localeCompare(b.end_location)
      })
      this.setState({
        flights: sortedFlights,
        index: 0
      })
    }
  
    sortDepartureTime = () => {
      const sortedFlights = [...this.state.flights].sort((a,b) => {
        return a.unx_dtime - b.unx_dtime
      })
      this.setState({
        flights: sortedFlights,
        index: 0
      })
    }
  
    sortArrivalTime = () => {
      const sortedFlights = [...this.state.flights].sort((a,b) => {
        return a.unx_atime - b.unx_atime
      })
      this.setState({
        flights: sortedFlights,
        index: 0
      })
    }
  
    sortPriceHighToLow = () => {
      const sortedFlights = [...this.state.flights].sort((a,b) => {
        return b.price - a.price
      })
      this.setState({
        flights: sortedFlights,
        index: 0
      })
    }
  
    sortPriceLowToHigh = () => {
      const sortedFlights = [...this.state.flights].sort((a,b) => {
        return a.price - b.price
      })
      this.setState({
        flights: sortedFlights,
        index: 0
      })
    }

    render() {
        return (
            hi
        )
    }
}