import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
            <ul> 
                <li>
                    <Link to="/login">Sign in</Link>
                </li>
                <li>
                    <Link to="/createaccount">Sign up</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;