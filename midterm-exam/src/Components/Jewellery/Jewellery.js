import "./Jewellery.css"
import Items from "../Items/Items"
import { useEffect, useState } from "react"
import Top from "../Top/Top"

function Electronics() {

    const [jewellery, setjewellery] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => {
                setjewellery(json)
            });
    }, []);

    return (
        <div>
            <div className="Top">
                <Top />
            </div>
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