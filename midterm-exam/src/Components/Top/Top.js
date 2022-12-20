import "./Top.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Item from "../Items/Items"

function Top(props) {

    return (
        <div>
            <div className="mainContainer">
                <div>
                <Link to="/"><img className="logo_img" alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logos.svg/800px-Logos.svg.png"></img></Link>
                </div>
                <div className="main-loginBox">
                    <div className="loginBox">
                        <div className="user">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </div>
                        <div className="App">
                            <div className="LoginMar">
                                <p className="LoginSign" id="Loginid">Login</p>
                                <p className="LoginSign">Or Sign Up</p>
                            </div>
                            <Dropdown title="Select">
                                <Dropdown.Item as="a" href="/Sign_up">
                                    Sign Up
                                </Dropdown.Item>

                                <Dropdown.Item as="a" href=
                                    "/Login">
                                    Login
                                </Dropdown.Item>

                                <Dropdown.Item as="a" href=
                                    "/">
                                    favourites
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>{props.counter}
                    </div>
                </div>
            </div>
            <hr className="Hr"></hr>
            <div className="ul">
                <ul>
                    <Link to="/"><li className="Link">All</li></Link>
                    <Link to="/Electronics"><li className="Link">Electronics</li></Link>
                    <Link to="/Jewellery"><li className="Link">Jewellery</li></Link>
                    <Link to="/Mens"><li className="Link">Men's Clothing</li></Link>
                    <li className="Link">Women's Clothing</li>
                </ul>
            <hr className="Hr"></hr>
            </div>
        </div>
    )
}

export default Top;