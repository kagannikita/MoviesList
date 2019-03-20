import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import  { NavLink } from 'react-router-dom';
class Favourites extends React.Component {
    render() {
        const favouritesArray = this.props.favourites;
        return (
            <div className="App">
                <ul>
                    <li> <NavLink className="active"  to="/">Home</NavLink></li>
                    <li> <NavLink className="active" to="/favourites">Favourite Films</NavLink></li>
                </ul>
                <h1>Favorites Films</h1>
                <ul className="list-group">
                    {favouritesArray.map(movie => {
                        return (
                            <li> {movie.name}
                                <a href={movie.url}>  <img className="film" src={movie.image}/></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        favourites: state.favourites.favourites
    }
};
export default connect(mapStateToProps)(Favourites);
