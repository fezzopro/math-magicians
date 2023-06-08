import { NavLink } from 'react-router-dom';
import './nav-bar.css';

const Nav = () => (
  <header className="nav-bar">
    <nav className="nav">
      <h1>Math Magicians</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="calculator">Calculator</NavLink></li>
        <li><NavLink to="quote">Quote</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Nav;
