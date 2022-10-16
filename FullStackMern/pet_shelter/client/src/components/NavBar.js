import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-dark col-12 no-gutter fluid">
            <h1 className="text-success">Pet DB</h1>
            <NavLink to="/" className="">Add Pet To Shelter!</NavLink>
            <NavLink  to="/petList" className="m-3">Home</NavLink>
        </div>
    )
}

export default NavBar;