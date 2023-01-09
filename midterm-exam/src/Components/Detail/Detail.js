import './Detail.css';
import React from 'react'
import { Link } from "react-router-dom"


function Detail(props) {

    const { Favorite, addToFavorites, addToCart, Detail, cart } = props
    console.log(Detail)

    return (
        <div className='main-cont'>
            <div className='title'>
                <h2>{Detail.title}</h2>
            </div>
            <div className='img'>
                <img src={Detail.image} />
            </div>
            <div className='desc'>
                <p><b className='b'>Description:-</b>{Detail.description}</p>
            </div>
            <div className='price'>
                <p><b className='b'>Price:-</b>${Detail.price}</p>
                <div className='heart'>
                    <svg onClick={() => addToFavorites(Detail)} xmlns="http://www.w3.org/2000/svg" className="_1l0elc" width="22" height="22" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill={`${Favorite.includes(Detail) ? 'red' : 'currentColor'}`} className="eX72wL" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg>
                </div>
            </div>
            <div className='buttonC'>
                <button onClick={() => addToCart(Detail)} className={` ${cart.includes(Detail) ? 'button Added-class' : 'button'}`} > {cart.includes(Detail) ? 'Remove from Cart' : 'Add to Cart'} </button>
            </div>
            <div className='buttonC'>
                <Link to="/"><button className='button'>Back to Items</button></Link>
            </div>
        </div>
    );
}


export default Detail