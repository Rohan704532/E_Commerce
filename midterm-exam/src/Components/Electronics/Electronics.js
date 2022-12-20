import "./Electronics.css"
import Items from "../Items/Items"
import { useEffect, useState } from "react"
import Top from "../Top/Top"

function Electronics() {

    const [electronics, setelectronics] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => {
                setelectronics(json)
            });
    }, []);

    return (
        <div>
            <div className="Top">
                <Top />
            </div>
            <div className="Bottom">
                <div className="flex">
                    {electronics.map(trend =>
                        <Items data={trend} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Electronics;