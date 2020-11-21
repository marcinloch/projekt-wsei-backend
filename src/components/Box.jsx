import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Box extends Component {

    inputRef = React.createRef();

    onSearchButton = () => {
        const { value } = this.inputRef.current;
        if (value.replace(/\s/g, '') !== '') {
            this.props.history.push(`/znajdzrestauracje/${value}`);
        }
    }

    render() {
        return (
            <div className="mainView">
                <div className="container flex">
                    <div className="mainView__localization">
                        <h2>Lokalizacja</h2>
                        <input type="text"/>
                        <Link className="button" to="/lokalizacja">Wyszukaj</Link>
                    </div>
                    <div className="mainView__localization">
                        <h2>Znajdz restaurcje</h2>
                        <input ref={this.inputRef} type="text"/>
                        <button onClick={this.onSearchButton} className="button">Wyszukaj</button>
                    </div>
                </div>
            </div>
        )
    }
}
