import React from 'react'
import "./Checkout.css"
import Total from '../Total/Total'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Header from '../Header/Header';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Jup23/PEAeventsplus1/1500x150_FT.jpg" alt="" />

                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}


                </div>
            </div>

            <div className="checkout__right">
                <Total />
            </div>
            
        </div>
    )
}

export default Checkout