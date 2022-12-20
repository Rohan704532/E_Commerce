import { useEffect, useState } from "react"
import Items from "../Items/Items"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Bottom.css"

function Bottom() {

    const [cloth, setcloth] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setcloth(json)
            });
    }, []);
    return (
        <div>
            <div className="flex">
                {cloth.map(trend =>
                    <Items data={trend} />
                )}
            </div>
        </div>
    )
}

export default Bottom;