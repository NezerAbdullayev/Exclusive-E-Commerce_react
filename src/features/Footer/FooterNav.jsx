import { NavLink } from "react-router-dom"

function FooterNav({children,className}) {
    return (
        <NavLink className={`text-textWhite2 mb-2.5     ${className ? className : ""} `}>
            {children}
        </NavLink>
    )
}

export default FooterNav
