import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faInfinity, faSquareRootAlt } from '@fortawesome/free-solid-svg-icons'
import './Singer.css';

const Singer = (props) => {
    // console.log(props);

    const { img, Name, Age, Country, TopSong, Charge } = props.singer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const spIcon = <FontAwesomeIcon icon={faInfinity} />
    const spIconTwo = <FontAwesomeIcon icon={faSquareRootAlt} />
    return (
        <div className="singer ">
            <img className="singer-img" src={img} alt="" />
            <p><strong>Name:</strong>  {Name}</p>
            <p><strong>Age: </strong>{Age}</p>
            <p><strong>Country:</strong> {Country}</p>
            <p><strong>Top Song:</strong> {TopSong}</p>
            <p><strong>Charge:</strong> {Charge}</p>
            <button
                onClick={() => props.handleAddToCart(props.singer)}
                className="btn-regular">{cartIcon}Add To Cart</button>
            <p className="special-icon">{spIcon}        {spIconTwo}</p>
        </div>

    );
};

export default Singer;