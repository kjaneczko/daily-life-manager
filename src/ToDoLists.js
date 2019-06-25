import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { DBToDoLists } from './DB'
import List, { ListItem } from './List'

export default class ToDoLists extends Component {
  constructor(props) {
    super(props)

    const myLists = DBToDoLists()
    let lastListId = 0

    myLists.forEach((el) => {
      if(el.id > lastListId) {
        lastListId = el.id
      }
    })

    this.state = {
      lastListId: lastListId,
      lists: myLists
    }
  }

  handleCheckbox = (event) => {
    const listId = parseInt(event.target.dataset.listid)
    const itemId = parseInt(event.target.dataset.itemid)
    this.setState({
      lists: this.state.lists.filter(list => {
        if(list.id === listId) {
          list.items = list.items.filter(item => {
            if(item.id === itemId) {
              item.checked = !item.checked
            }
            return item
          })
        }
        return list
      })
    });
  }

  handleAddList = () => {
    console.log('addList')
    // Bootstrap modals
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <Route
          exact
          path={this.props.match.path}
          render={(props) => <Index {...props}
            lists={this.state.lists}
            handleAddList={this.handleAddList} />} />
        <Route
          path={`${this.props.match.path}/list/:url`}
          render={(props) => <Show {...props}
            handleCheckbox={this.handleCheckbox}
            lists={this.state.lists} />}
        />
      </div>
    )
  }
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredLists: this.props.lists
    }
  }

  handleSearchBar = (text) => {
    const filteredLists = this.getFilteredLists(text)
    this.setState({
      filteredLists: filteredLists
    })
  }

  getFilteredLists(text) {
    return this.props.lists.filter(list => list.title.toLowerCase().includes(text.toLowerCase()))
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <h1>
          To do lists
          <Button variant="primary" onClick={this.props.handleAddList}><FontAwesomeIcon icon={faPlusSquare} /></Button>
        </h1>
        <SearchBar lists={this.props.lists} handleSearchBar={this.handleSearchBar} />
        <List lists={this.state.filteredLists} url={this.props.match.url} type="list" />
      </div>
    )
  }
}

class Show extends Component {
  constructor(props) {
    super(props)
    const myLists = this.props.lists
    const choosedList = myLists.filter(list => {
      if(list.url === props.match.params.url) {
        return list
      }
      return null
    })

    this.state = choosedList[0]
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <Button variant="primary" onClick={this.props.history.goBack}>Back</Button>
        <ListItem list={this.state} handleCheckbox={this.props.handleCheckbox} />
      </div>
    )
  }
}
