import React from "react";

class Sort extends React.Component {

  state ={
    sortBy: ""
  }

  sortBy = (e) => {
    this.setState({
      sortBy: e.target.value
    }, ()=> {
      this.props.handleSort(this.state.sortBy)
    })
  }

  render(){
    return(
      <div id="sort-dropdown">
      <span id="sortby-text">Sort By</span>
        <select className="ui search dropdown" onChange={this.sortBy}>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>City: A-Z</option>
        <option>Departure Time</option>
        <option>Arrival Time</option>
        </select>
      </div>
    )
  }

}

export default Sort
