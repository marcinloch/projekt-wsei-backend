import React, { PureComponent } from "react";

export default class Hamburger extends PureComponent {

    render() {

        const onClick = this.props.onClick;
        return (
            <div className="header__hamburger" onClick={onClick}>
                <span />
                <span />
                <span />
            </div>
        )
    }
}
