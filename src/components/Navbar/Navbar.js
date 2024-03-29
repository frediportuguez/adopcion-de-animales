import React, { /* useState, */ useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
/* import { useGlobalContext } from "../../GlobalContext"; */
import { toast } from "react-toastify";
//import { GoSearch } from "react-icons/go";
import "./Navbar.css";

const Navbar = () => {
  const { loggedUser, isAuthenticated, toggleAuthOut } = useContext(AuthContext);
  //const [search, setSearch] = useState();
  const notify = (text) => toast(text);
  const navigate = useNavigate();
  /* const { newUser, setNewUser } = useGlobalContext(); */

  //console.log("loggedUser", loggedUser)
  /*   const userStorage = !!localStorage.getItem("newUser")
    ? JSON.parse(localStorage.getItem("newUser"))
    : {}; */
  const handlelogout = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3030/user/logout")
    .then((res) => {
      notify(`Logged out`);
      localStorage.removeItem("newUser");
      toggleAuthOut();
      /* setNewUser({}); */
      navigate("/");
    });
  };

/*   const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearch = () => {
    axios
      .get(`http://localhost:3030/search/${search}`)
      .then((res) => res.data)
      .then((search) => setSearch(search));
    navigate(`/search/${search}`);
  }; */


  // console.log("CONETXT", loggedUser)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="titleLink" to="/">
          {/* <span className="navbar-brand"> */}Pet Adoption{/* </span> */}
        </Link>
        <a className="titleLink" href="http://localhost:3005">
          Pet House
        </a>
        <div className="bgButton">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {
          /* userStorage. */ isAuthenticated ? (
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="link" to="/">
                    {/* <span className="nav-link active"> */}Home
                    {/* </span> */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="link"
                    to={`/account/${loggedUser._id /* userStorage._id */}`}
                  >
                    {/* <span className="nav-link"> */}
                    {/* userStorage */ loggedUser ? loggedUser.username : ""}
                    {/* </span> */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/favorite/:userId"></Link>
                </li>

                <li className="nav-item">
                  <Link className="link" to="/association/pages/1">
                    {/* <span className="nav-link"> */}Fundaciones
                    {/* </span> */}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="link" to="/search">
                    Buscar
                  </Link>
                </li>

                <li className="link">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Más
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="subLi">
                      <Link className="subLink" to="/contact">
                        <span /* className="dropdown-item" */>Contacto</span>
                      </Link>
                    </li>
                    <li className="subLi">
                      <Link className="subLink" to="/aboutus">
                        {/* <span className="dropdown-item"> */}Sobre nosotros
                        {/* </span> */}
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="subLi">
                      <a
                        className="subLink"
                        href="mailto:info@petsadoption.org?Subject=Reporte%20de%20error%20en%20web"
                      >
                        {/* <span className="dropdown-item"> */}Reportar error
                        {/* </span> */}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/*  <ul className=" ">
                <form
                  onSubmit={onSearch}
                  className="nav-item d-flex align-self-center"
                >
                  <div className="input-group ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Busqueda"
                      onChange={onChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      // onClick={onSearch}
                    >
                      {<GoSearch />}
                    </button>
                  </div>
                </form>
              </ul> */}
              <ul className="navbar-nav ms-auto">
                <Link to="/">
                  <button className="btn" onClick={handlelogout}>
                    Logout
                  </button>
                </Link>
              </ul>
            </div>
          ) : (
            <>
              {/* <ul className="searchBarOut">
                <form className="nav-item d-flex align-self-center">
                  <div className="input-group ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Busqueda"
                      onChange={onChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="submit"
                      id="button-addon2"
                      onClick={onSearch}
                    >
                      {<GoSearch />}
                    </button>
                  </div>
                </form>
              </ul> */}
              <ul className="navbar-nav ms-auto">
                <Link to="/login">
                  <button className="btn"> Login </button>
                </Link>
                <Link to="/register">
                  <button className="btn"> Register </button>
                </Link>
              </ul>
            </>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
