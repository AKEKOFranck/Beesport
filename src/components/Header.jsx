import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";




export default function Header() {
    const NavData = [
        {
            id:1,
            icon: <IoIosHome className='nav_ico' /> ,
            title: "Accueil",
            link:"/",
        },
         {
            id:2,
            icon: <FaUsers className='nav_ico' /> ,
            title: "Coachs",
            link:"/Master",
        },
         {
            id:4,
            icon: <FaCircleInfo className='nav_ico' /> ,
            title: "Infos",
            link:"/About",
        },
    ]
    return(
        <header>
            <Link to="/"> <h2 className='head_title'> The Beesport </h2> </Link>
            {NavData.map((data) =>(
                <Link className='nav_link' key={data.id} to={data.link}>
                    {data.icon}
                   <h4 className='nav_title'> {data.title} </h4>
                </Link>
            ))}
        </header>
    )
}