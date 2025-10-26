import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaHeadset } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";




export default function Footer() {

    const infoData =  [
            "+225 05-84-47-45-23",
            "thebeesport13@gmail.com",
            "Disponible :",
            "21/24h",
            "7/7jours",
        ];

    const info = [
        {
            id:1,
            icon: <IoIosMail className='foot_ico' /> ,
            title: "GMAIL",
            link : "mailto:thebeesport13@gmail.com" ,
        },
         {
            id:2,
            icon: <FaHeadset className='foot_ico' /> ,
            title: "Service 7j/7",
            link :"tel:+2250584474523" ,
        },
         {
            id:3,
            icon:  <MdDownloadForOffline className='foot_ico' /> ,
            title: "Télécharger",
            link : "/InstallBT" ,
        }
    ]

    
    return(
        <footer>
            {info.map((data) =>(
                 <a href={data.link} className='foot_box' key={data}>
                    {data.icon}
                   <h5 className='foot_title'> {data.title} </h5>
                </a>
            ))}
        </footer>
    )
}