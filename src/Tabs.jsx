import React from 'react'
import './Styles/tabs.css'
import { Link } from 'react-router-dom'

const Tabs = (props) => {
return (

    <div className="tabsPart">
            <div className="leftPart">
                <span className="noOfRestro"> {props.data} Restaurants </span>
            </div>
            <div className="rightPart">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                         <Link to="/" style={{color:'black', fontSize:'22px'}} >Relvance</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Tabs