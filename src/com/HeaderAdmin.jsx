import './Add.css'
import './Res.css'
import { Link } from 'react-router-dom';
import lo from './img/lo.png';
import go from './img/3.png';
import { useRef } from 'react';

function HeaderAdmin() {

    const nav = useRef()



    return (
        <section id="header">
            <a href="/DashBored">
                <img src={lo} alt="" className="logo" />
                <img src={go} className="logo2" alt="" />
            </a>
            <div>
                <ul id="navbar" ref={nav}>
                    <li>
                        <Link to="/" id="close">
                            <i className="far fa-times" id="cicon" onClick={() => { nav.current.classList.remove('active') }}></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/display">Shop</Link>
                    </li>
                    <li>
                        <a href="#foot">About</a>
                    </li>
                    <li>
                        <a href="#foot">Contact</a>
                    </li>
                    <li className="dropdown">

                        <menu className="dropbtn">Edit</menu>
                        <div className="dropdown-content">
                            <Link to="/adminadd">Add</Link>
                            <Link to="/adminupdate">Update</Link>
                            <Link to="/admindelete">Delete</Link>

                        </div>
                    </li>


                    <li id="lg-prof">
                        <Link to="/userpage">
                            <i className="fa-solid fa-user" style={{ color: '#626364' }}></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="mob">

                <Link to="/userpage">
                    <i className="fa-solid fa-user" style={{ color: '#626364' }}></i>
                </Link>
                <i id="bar" className="fas fa-outdent" onClick={() => { nav.current.classList.add('active') }}></i>
            </div>
        </section>
    );
}

export default HeaderAdmin;
