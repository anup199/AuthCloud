import { Link } from "react-router-dom"
import './Header.css'

function Header(){
    return(
        <>
            <header>
                <div className="container header_Nav">
                    <p>Logo</p>
                <nav>
                    <Link to="/home">Home</Link> | 
                    <Link to="/about"> About</Link> | 
                    <Link to="/contact"> Contact</Link>|
                    <Link to="/list"> List All</Link>
                </nav>
                    <Link to="/applyNow"> Apply Now</Link>

                {/* <button className="pointer">Apply Now</button> */}
                </div>
            </header>
        </>
    )
}

export default Header