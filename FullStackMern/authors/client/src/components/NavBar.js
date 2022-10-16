import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-dark col-12 no-gutter fluid">
            <h1 className="text-info">Author DB</h1>
            <NavLink to="/" className="">Form</NavLink>
            <NavLink  to="/authorList" className="m-3">Home</NavLink>
        </div>
    )
}

export default NavBar;