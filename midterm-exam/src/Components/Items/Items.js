import "./Items.css"
import { useState } from "react";
import Top from "../Top/Top"

function Items(props) {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    const [add, setAdd] = useState(false);
    const AddRemove = () => {
        setAdd(!active);
    };

    return (
        <>
            <div>
                <div className="item-box">
                    <div className="wishlist">
                        <svg onClick={handleClick} style={{ color: active ? "red" : "black" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svg" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                    </div>
                    <div className="product-img">
                        <img src={props.data.image}></img>
                    </div>
                    <hr></hr>
                    <div className="brand">
                        <p><b>Brand,</b>{props.data.title}</p>
                    </div>
                    <div className="ratings">
                        <div className="star-box">
                            <img className="star" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></img>
                        </div>
                        <div className="count">(120)</div>
                    </div>
                    <div className="price">
                        <div>$109</div>
                        <div className="last-digit">95</div>
                    </div>
                    <div>
                        <button onClick={AddRemove} style={{ backgroundColor: add ? "red" : "rgba(37,99,235,255)" }}className="button">{add?"Remove from Cart":"Add to Cart"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items;