import React, {Component} from "react";

export default class FindRestaurant extends Component {


    render() {
        const { name } = this.props.match.params;

        return(
            <div className="findRestaurants">
                <div className="restaurants">
                    <div className="restaurants__localization">{name}</div>
                    <div className="restaurants__search">
                        <p> Ilość osób <span>2</span></p>
                        <p> Godzina <span>12:30</span></p>
                        <p> Kuchnie <span>Wszystkie</span></p>
                    </div>
                    <div className="restaurants__slider">
                        <div className="restaurants__restaurant">
                            <div className="">
                                <img src="" alt="tuobrazek"/>
                            </div>
                            <p className="restaurants__name">Meksykańska</p>
                            <p className="restaurants__free-places">wolnych miejsc</p>
                            <p className="restaurants__number">10</p>
                        </div>
                        <div className="restaurants__restaurant">
                            <div className="">
                                <img src="" alt="tuobrazek"/>
                            </div>
                            <p className="restaurants__name">Meksykańska</p>
                            <p className="restaurants__free-places">wolnych miejsc</p>
                            <p className="restaurants__number">10</p>
                        </div>
                        <div className="restaurants__restaurant">
                            <div className="">
                                <img src="" alt="tuobrazek"/>
                            </div>
                            <p className="restaurants__name">Meksykańska</p>
                            <p className="restaurants__free-places">wolnych miejsc</p>
                            <p className="restaurants__number">10</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
