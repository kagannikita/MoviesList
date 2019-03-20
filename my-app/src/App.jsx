import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {  addToFavourites } from "./actions";
import { withRouter} from 'react-router-dom';
import  { NavLink } from 'react-router-dom';
class App extends Component {
  addToFavourites(movieId) {//добавление по id в favorites
    const movieToAdd = this.props.movies.find(movie => movie.id === movieId);//поиск по id
    this.props.addToFavourites(movieToAdd);
    this.props.history.push('/favourites');//после добавление отправляет в favourites
  }
  render() {
    const movies = this.props.movies;
    return (
        <div className="App">
          <ul>
            <li> <NavLink className="active"  to="/">Home</NavLink></li>
            <li>  <NavLink className="active" e to="/favourites">Favourite Films</NavLink></li>
          </ul>
          <h1>Movies List</h1>
          <ul className="list-group">
            {
              movies.map(movie => {//реализация списка
                return (
                    <li key={movie.id} className="list-group-item" >
                      {movie.name}
                      <a href={movie.url}>  <img className="film" src={movie.image}/></a>
                      <button onClick={this.addToFavourites.bind(this, movie.id)}>Add to Favorites</button>
                    </li>
                )
              })
            }
          </ul>
        </div>
    );
  }
}
const mapStateToProps = (state) => {//привязка функции взятая из редусера состояние
  return {
    movies: state.movies.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavourites: (movie) => {
      dispatch(addToFavourites(movie));
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

