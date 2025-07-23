import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import { RiCustomerService2Fill } from "react-icons/ri";


export default function Header() {
    return(
        <header>
            <h2 className='nav_title'>BeeSportCam</h2>

            <nav>
                <Link to='/' className='nav_link_home'><ImHome />
</Link>
                <Link to='/Master' className='nav_link'>Nos coachs</Link>
            </nav>
        </header>
    )
}