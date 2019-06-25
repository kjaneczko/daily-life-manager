import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { DBMyCookbook } from './DB'
import List from './List'
import string_to_slug from './Slug'

export default class Cookbook extends Component {
  constructor(props) {
    super(props)
    const myRecipes = DBMyCookbook()
    let lastListId = 0

    myRecipes.forEach((el) => {
      if(el.id > lastListId) {
        lastListId = el.id
      }
    })

    this.state = {
      lastListId: lastListId,
      recipes: myRecipes,
      newRecipe: ''
    }
  }

  handleAddRecipe = (name) => {
    // Bootstrap modals
    const myRecipes = this.state.recipes.slice()
    const lastListId = this.state.lastListId + 1
    const url = string_to_slug(name)
    myRecipes.push({
      id: lastListId,
      title: name.trim(),
      url: url,
      prepare_time: '',
      servings: '',
      calories: '',
      protein: '',
      carbohydrates: '',
      fat: '',
      ingrediens_info: '',
      ingrediens: {
        main: [],
        marinate: [],
        sause: []
      },
      prepering_description: '',
      image: 'https://picsum.photos/id/237/200/300',
      source: ''
    })

    this.setState({
      lastListId: lastListId,
      recipes: myRecipes,
      newRecipe: url
    })

    // this.props.history.push(`${this.props.match.path}`)
    // this.props.history.push(`${this.props.match.path}/list/${url}`)
  }

  render() {
    if(this.state.newRecipe) {
      this.setState({
        newRecipe: ''
      })
      return (
        <Redirect
          to={{
            pathname: `${this.props.match.path}/recipe/${this.state.newRecipe}`,
            recipes: this.state.recipes
          }}
        />
      )
    }
    return (
      <div className="col-md-10 col-md-offset-1">
        <Route
          exact
          path={this.props.match.path}
          render={(props) => <Index {...props} recipes={this.state.recipes} />} />
        <Route
          path={`${this.props.match.path}/recipe/:url`}
          render={(props) => <Show {...props} recipes={this.state.recipes}/>} />
        <Route
          path={`${this.props.match.path}/create`}
          render={(props) => <Create {...props}
            handleAddRecipe={this.handleAddRecipe} />} />
      </div>
    )
  }
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredRecipes: this.props.recipes
    }
  }

  handleSearchBar = (text) => {
    const filteredRecipes = this.getFilteredLists(text)
    this.setState({
      filteredRecipes: filteredRecipes
    })
  }

  getFilteredLists(text) {
    return this.props.recipes.filter(recipe => recipe.title.toLowerCase().includes(text.toLowerCase()))
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <h1>
          Cookbook
          <LinkContainer to={`${this.props.match.path}/create`}>
            <Button variant="primary"><FontAwesomeIcon icon={faPlusSquare} /></Button>
          </LinkContainer>
        </h1>
        <SearchBar lists={this.props.recipes} handleSearchBar={this.handleSearchBar} />
        <List lists={this.state.filteredRecipes} url={this.props.match.url} type="recipe" />
      </div>
    )
  }
}

class Show extends Component {
  constructor(props) {
    super(props)
    const myRecipes = this.props.recipes
    const choosedRecipe = myRecipes.filter(recipe => {
      if(recipe.url === props.match.params.url) {
        return recipe
      }
      return null
    })

    this.state = choosedRecipe[0]
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <Button variant="primary" onClick={this.props.history.goBack}>Back</Button>
        <h3 className="text-center">{this.state.title}</h3>
        <div className="row">
          <div className="col-md-4">
            <h4>Składniki</h4>
            {(this.state.ingrediens_info) ? <p><em>{this.state.ingrediens_info}</em></p> : ''}
            {this.state.ingrediens.main.map((el, index) => {
              console.log(el)
              return (
                <p key={`pr${index}`}>{el}</p>
              )
            })}
          </div>
          <div className="col-md-8">
            {this.state.prepering_description}
          </div>
        </div>
      </div>
    )
  }
}

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeName: ""
    }
  }

  handleInput = (event) => {
    this.setState({
      recipeName: event.target.value
    })
  }

  handleAddButton = () => {
    if(this.state.recipeName !== '') {
      this.props.handleAddRecipe(this.state.recipeName)
    }
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <h1>Add new recipe</h1>
        <input type="text" onChange={this.handleInput} value={this.state.recipeName} placeholder="Recipe name" />
        <Button variant="primary" onClick={this.handleAddButton}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </Button>
      </div>
    )
  }
}
