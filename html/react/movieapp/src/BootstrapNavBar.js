import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BootstrapNaveBar extends Component{
	render(){
	   return(
	     <nav className="navbar navbar-inverse">
	       <div className="container-fluid">
	         <div className="navbar-header">
	           <Link className="navbar-brand" to="/">WebSiteName</Link>
	         </div>
	         <ul className="nav navbar-nav">
	         	<li><Link to="/register">Register</Link></li>
	          	<li><Link to="/login">Login</Link></li>
	           	<li><Link to="/favorites">Favorites</Link></li>
	         </ul>
	       </div>
	     </nav>
	   )
 }
}

export default BootstrapNaveBar;