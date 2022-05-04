import React from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import * as C from './style'

export const MenuItem = ({icon, link, title}) => {

    const location = useLocation()

    let pageActive = location.pathname === link 

    return(
        <Link data-tip={title} data-for='tip-right' to={link} style={{
            display: "block",
            width: 60,
            height: 60,
            marginBottom: 10,
        }}>
            <C.LinkArea pageActive={pageActive}>
                <img src={icon} alt="icon" />
            </C.LinkArea>
        </Link>
    );
};