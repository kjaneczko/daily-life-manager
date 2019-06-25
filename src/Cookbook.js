import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import SearchBar from './SearchBar'
import { DBMyCookbook } from './DB'
import List from './List'

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
      recipes: myRecipes
    }
  }

  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <Route
          exact
          path={this.props.match.path}
          render={(props) => <Index {...props} recipes={this.state.recipes} />} />
        <Route
          path={`${this.props.match.path}/recipe/:url`}
          render={(props) => <Show {...props} recipes={this.state.recipes}/>} />
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
        <h1>Cookbook</h1>
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
