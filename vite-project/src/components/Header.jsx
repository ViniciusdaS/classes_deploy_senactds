import { Link } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

export default function Header() {
    return(
        <header>
            <h1>Bem vindo ao site dos guri!</h1>
            <nav>
                <Link path={"/"} to={Home}/>
                <Link path={"/about"} to={About}/>
            </nav>
        </header>
    )
}