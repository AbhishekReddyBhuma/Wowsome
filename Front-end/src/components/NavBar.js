import react,{useState} from "react";
import "./NavBar.css"
import logo from "../Assets/wowsome-logo.svg";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
    const [search,setSearch] = useState("");
    
    return <div className="nav-container">
        <ul className="nav-list">
            <div className="app-logo">wowsome</div>
            <li id="searchBar-cont">
                <FaSearch 
                style={{
                    backgroundColor:"#ffffff",
                    color:"gray",
                    height:"30px",
                    position: "relative",
                    top: "-5px",
                    padding: "0px 8px",
                    left: "7px",
                    borderRadius: "5px",
                    hover:{
                        cursor:"pointer"
                    }}}
                    onMouseOver={(e) => e.currentTarget.style.cursor = 'pointer'}
                    onClick={()=> console.log(search)}/>
                <input className="search-bar" placeholder="Search Products"
                onChange={(e) => {
                    setSearch(e.target.value)
                }}></input>
            </li>
            <Link to="/products" style={{ textDecoration:"none" ,color: "#ffffff"}}><li>Home</li></Link>
            <Link to="/add" style={{ textDecoration: "none", color: "#ffffff" }}><li>Products</li></Link>
            <li className="cart-container"><img className="cart-icon" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"/>
            <span className="cart-title">Cart</span></li>
            <li>Contact us</li>
        </ul>
    </div>
}

export default NavBar;