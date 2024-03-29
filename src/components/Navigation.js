import { Link } from 'react-router-dom';

function Navigation() {
 return (
<nav>
<ul>
 <li>
<Link to="/">Home</Link>
 </li>
 <li>
<Link to="/services">Services</Link>
 </li>
 <li>
<Link to="/tours">Tours</Link>
 </li>
 <li>
<Link to="/about">About</Link>
 </li>
 <li>
<Link to="/registration">Registration</Link>
</li>
</ul>
</nav>
 );
}

export default Navigation;