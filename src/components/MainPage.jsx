import React, { PureComponent } from "react";
import {Link} from "react-router-dom";

export default class Hamburger extends PureComponent {

    render() {

        return (
            <div className="header__main-page">
                <Link to="/">Main Page</Link>
            </div>
        )
    }
}
