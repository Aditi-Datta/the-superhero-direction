import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Singer from "../Singer/Singer";
import './Ceremony.css';

const Ceremony = () => {

    const [singer, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, [])

    const handleAddToCart = (singer) => {
        const newCart = [...cart, singer];
        setCart(newCart);
    }

    return (
        <div className="ceremony-container container">
            <div className="row">
                <div className="singer-container col-9">
                    <div className="singer-contain">
                        {
                            singer.map(singer => <Singer
                                singer={singer}
                                handleAddToCart={handleAddToCart}
                            >
                            </Singer>)
                        }
                    </div>
                </div>

                <div className="cart-container col-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div >
    );
};

export default Ceremony;