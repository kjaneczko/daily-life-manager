import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { DBToDoLists } from './DB'
import List, { ListItem } from './List'
import string_to_slug from './Slug'

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
      lists: myLists,
      newList: '',
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

  handleAddList = (name) => {
    // Bootstrap modals
    const myLists = this.state.lists.slice()
    const lastListId = this.state.lastListId + 1
    const url = string_to_slug(name)
    myLists.push({
      id: lastListId,
      title: name.trim(),
      url: url,
      prices: false,
      items: []
    })

    this.setState({
      lastListId: lastListId,
      lists: myLists,
      newList: url
    })

    // this.props.history.push(`${this.props.match.path}`)
    // this.props.history.push(`${this.props.match.path}/list/${url}`)
  }

  render() {
    if(this.state.newList) {
      this.setState({
        newList: ''
      })
      return (
        <Redirect
          to={{
            pathname: `${this.props.match.path}/list/${this.state.newList}`,
            lists: this.state.lists,
            handleCheckbox: this.handleCheckbox
          }}
        />
      )
    }
    return (
      <div className="col-md-10 col-md-offset-1">
        <Route
          exact
          path={this.props.match.path}
          render={(props) => <Index {...props}
            lists={this.state.lists} />} />
        <Route
          path={`${this.props.match.path}/list/:url`}
          render={(props) => <Show {...props}
            lists={this.state.lists}
            handleCheckbox={this.handleCheckbox} />} />
        <Route
          path={`${this.props.match.path}/create`}
          render={(props) => <Create {...props}
            handleAddList={this.handleAddList} />} />
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
          <LinkContainer to={`${this.props.match.path}/create`}>
            <Button variant="primary"><FontAwesomeIcon icon={faPlusSquare} /></Button>
          </LinkContainer>
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

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listName: ""
    }
  }

  handleInput = (event) => {
    this.setState({
      listName: event.target.value
    })
  }

  handleAddButton = () => {
    if(this.state.listName !== '') {
      this.props.handleAddList(this.state.listName)
    }
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <h1>Add new list</h1>
        <input type="text" onChange={this.handleInput} value={this.state.listName} placeholder="List name" />
        <Button variant="primary" onClick={this.handleAddButton}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </Button>
      </div>
    )
  }
}
