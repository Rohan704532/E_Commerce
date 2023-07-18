import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Favourites.css"

function Favourites(props) {

    const { Favorite, addToFavorites, addToCart, cart } = props
    const [completed, setCompleted] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/getFav', {
            method: "GET"
        }).then((res) => {
            res.json()
                .then((data) => {
                    completed.push(data.item)
                    setCompleted([...completed])
                })
        })
    }, [])

    return (
        <div>
            {completed.length > 0 ? completed.map((item, index) => {
                return (
                    <div  className='flex' key={index}>
                        {item.map((item1, index1) => {
                            return (
                                <div className='item-box' key={index1}>
                                    <div className='product-img'>
                                        <img src={item1.image} alt='product' />
                                    </div>
                                    <div className='brand'>
                                        <p><b>Brand, </b><span>{item1.title}</span></p>
                                    </div>
                                    <div className="ratings">
                                        <div className="star-box">
                                            <img className="star" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></img>
                                        </div>
                                        <div className="count">.{item1.rating}</div>
                                    </div>
                                    <div className="price">
                                        <div>${item1.price}</div>
                                    </div>
                                    <button onClick={() => addToCart(item)} className={` ${cart.includes(item) ? 'button Added-class' : 'button'}`} > {cart.includes(item) ? 'Remove from Cart' : 'Add to Cart'} </button>
                                </div>
                            )
                        })}
                    </div>
                )
            }) : ''}
        </div>
    );
}


export default Favourites