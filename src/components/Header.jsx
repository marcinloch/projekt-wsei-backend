import React, { PureComponent } from "react";

export default class Header extends PureComponent {


    render() {
        const { children } = this.props;
        return (
            <div className="header">
                {children}
            </div>
        )
    }
}
