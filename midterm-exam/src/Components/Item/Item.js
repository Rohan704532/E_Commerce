import "./Item.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function All(props) {

    const {addToFavorites, cart, addToCart } = props

    const [product, setData] = useState([])
    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
    }, []);

    return (
        <div>
            <div className="flex">
                {product.length > 0 ? product.map((item, index) => {
                    return (<div className='item-box' key={index}>
                        <div className='wishlist' >
                            <svg onClick={() => addToFavorites(item)} xmlns="http://www.w3.org/2000/svg" className="_1l0elc" width="18" height="18" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill={`${props.Favorite.includes(item) ? 'red' : 'currentColor'}`} className="eX72wL" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg>

                        </div>

                        <div className='product-img'>
                            <Link to="/Detail"><img src={item.image} alt='product' /></Link>
                        </div>

                        <div className='brand'>
                            <p><b>Brand, </b><span>{item.title}</span></p>
                        </div>

                            <div className="ratings">
                                <div className="star-box">
                                    <img className="star" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></img>
                                </div>
                                <div className="count">.{item.rating.count}</div>
                            </div>

                            <div className="price">
                                <div>${item.price}</div>
                            </div>

                            <button onClick={() => addToCart(item)} className={` ${cart.includes(item) ? 'button Added-class' : 'button'}`} > {cart.includes(item) ? 'Remove from Cart' : 'Add to Cart'} </button>


                    </div>)
                }) : ''}

            </div>
        </div>
    )
}

export default All;