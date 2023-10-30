import { Component } from "react";
import "./navbarStyle.css";
import {MenuItems} from "./MenuItems";
import {Link} from "react-router-dom";

class Navbar extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="logo">CHALO</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    {this.state.clicked ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </div>
                <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.URL}><i className={item.icon}></i>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
