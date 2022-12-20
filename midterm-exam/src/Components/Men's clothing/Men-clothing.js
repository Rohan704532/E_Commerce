import "./Men-clothing.css"
import Items from "../Items/Items"
import { useEffect, useState } from "react"
import Top from "../Top/Top"

function Electronics() {

    const [jewellery, setjewellery] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories/")
            .then(res => res.json())
            .then(json => {
                setjewellery(json);
            });
    }, []);

    return (
        <div>
            <div className="Top">
                <Top />
            </div>
            <hr className="HR"></hr>
            <div className="Bottom">
                <div className="flex">
                    {jewellery.map(trend =>
                        <Items data={trend} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Electronics;