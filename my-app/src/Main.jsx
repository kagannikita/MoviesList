import { Route, Switch } from 'react-router-dom'
import App from './App';
import React from 'react';
import Favourites from './Favourites';
class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/favourites" component={Favourites}/>
                    <Route path="/" component={App}/>
                </Switch>
            </div>
        )
    }
}

export default Main;
