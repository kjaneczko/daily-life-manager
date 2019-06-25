import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }

  handleInput = (event) => {
    this.setState({
      search: event.target.value
    })
    this.props.handleSearchBar(event.target.value)
  }

  render() {
    return (
      <input className="form-control" type="text" name="search" value={this.state.search} placeholder="Szukaj..." onChange={this.handleInput} />
    )
  }
}
