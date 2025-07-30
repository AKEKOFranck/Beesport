import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import logo from '../assets/logo sport.jpg';




export default function Footer() {

    const infoData =  [
            "+225 05-84-47-45-23",
            "thebeesport13@gmail.com",
            "Disponible :",
            "21/24h",
            "7/7jours",
        ];

    
    return(
        <footer>
           <div className='fot_content'>
            <h3 className='foot_title'>Info</h3>
            <h5 className='foot_text'>
               <ul className='foot_list1'>
                {infoData.map((item, idx) => (
                     <li className='foot_list2' key={idx}>{item}</li>
                ))}
               </ul>
            </h5>
           </div>

           
            <img className='foot_img' src={logo} alt='poste'></img>
        

           
        </footer>
    )
}