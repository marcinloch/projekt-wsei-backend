import React, { Component } from "react";
import { Router, Link, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Header, LoginMenu, ErrorPage, Registration, FindRestaurant, Box, Hamburger, Menu, MainPage  } from './components';
import FindRestauration from "./components/FindRestauration";
import './App.scss';

const history = createBrowserHistory();

export default class App extends Component {

    state = {
        burgerOpen: false,
    }

    burgerHandler = () => {
        this.setState({
            burgerOpen: !this.state.burgerOpen
        });
    }

    burgerTurnOff = () => {
        this.setState({ burgerOpen: false })
    }

    render() {
        const { burgerOpen } = this.state;

        return (
            <Router history={history}>
                <div className="mainBox">
                    <Header burgerOpen={burgerOpen} onClick={this.burgerHandler}>
                        <Hamburger onClick={this.burgerHandler} />
                        {burgerOpen && <Menu onClick={this.burgerTurnOff} />}
                        <MainPage />
                    </Header>
                    <Switch>
                        <Route path="/zaloguj" component={LoginMenu}/>
                        <Route path="/zarejestrujsie" component={Registration}/>
                        <Route path="/znajdzrestauracje/:name" component={FindRestauration} />
                        {/*<Route path="/twojerezerwacje" exact component={LoginMenu}/>*/}
                        {/*<Route path="/kontakt" exact component={LoginMenu}/>*/}
                        <Route path="/" exact>
                            <Box history={history} />
                        </Route>
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
