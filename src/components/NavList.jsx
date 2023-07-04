import { Link } from "react-router-dom"

export default function NavList() {

    return(
        <nav>
            <ul>
                <li>Navlist</li>
                <li><Link to="/contact">Home</Link></li>
                <li><a href="/about">About</a></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="https://gitHub.com"  target="_blank" rel='no referrer'>GitHub</a></li>
                
            </ul>
        </nav>
    )
}