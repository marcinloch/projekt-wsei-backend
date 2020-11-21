import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Menu extends PureComponent {
    links = ['zaloguj', 'zarejestrujsie', 'twojerezerwacje', 'kontakt', 'onas']

    render() {
        const { onClick } = this.props;

        return (
            <div className="header__menu">
                <ul>
                    {this.links.map(item => (<li key={item} onClick={onClick}>
                        <Link to={`/${item}`}>{item}</Link>
                    </li>))}
                </ul>
            </div>

        )
    }
}
