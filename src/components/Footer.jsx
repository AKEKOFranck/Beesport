import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import logo from '../assets/logo sport.jpg';




export default function Footer() {

    const infoData =  [
            "+225 07-08-09-06-10",
            "Disponible :",
            "21/24h",
            "7/7jours",
        ];

    const socialData = [
        <FaInstagram className='foot_icons' />,
        <SiTiktok  className='foot_icons' />,
        <FaFacebookSquare  className='foot_icons'/>,
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
        

             <div className='fot_content'>
            <h3 className='foot_title'>Réseaux sociaux</h3>
            <h5 className='foot_text'>
               <ul className='foot_list1'>
                 {socialData.map((item, idx) => (
                     <li className='foot_list2' key={idx}>{item}</li>
                ))}
               </ul>
            </h5>
           </div>
        </footer>
    )
}