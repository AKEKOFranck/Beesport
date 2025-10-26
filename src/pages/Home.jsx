import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



import { IoHomeOutline } from "react-icons/io5";
import { MdPhonelink } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import icon from '../assets/icon.png';
import logo from '../assets/logo sport.jpg';

export default function Home() {

   const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/About");
    };

    const prices = [
        {id:5, title: "Abonnement unique en ligne", prix: 3000 , info: "via votre écran avec votre coach"},
        {id:6, title: "Abonnement mensuel en ligne", prix: 20000 , info: "via votre écran avec votre coach"},
        {id:7, title: "Abonnement unique en salle", prix: 10000 , info: "dans une salle de votre choix d'un commun accord entre votre coach, vous et la salle trouvée"},
        {id:8, title: "Abonnement mensuel en salle", prix: 50000 , info: "dans une salle de votre choix d'un commun accord entre votre coach, vous et la salle trouvée"},
    ];



    return(
        <section className='home_main'>
             <div className='home_container'>
  <div className='scroll-wrapper'>
    <div className='scroll-content'>
      <MdPhonelink className='home_ico' />
      <IoHomeOutline className='home_ico' />
      <IoPhonePortraitOutline className='home_ico' />
      <img className='ico_img' src={icon} alt='icon' />
      {/* Dupliquez les éléments pour l'effet infini */}
      <MdPhonelink className='home_ico' />
      <IoHomeOutline className='home_ico' />
      <IoPhonePortraitOutline className='home_ico' />
      <img className='ico_img' src={icon} alt='icon' />
    </div>
  </div>
</div>
           <div className='home_container' id='home_text'>
            Transformez votre salon en gym ! 💪
            <p> Alors découvrez TheBeesport  </p>
            <p className='home_arrow'>  ↓ </p>
           </div>

            <button onClick={handleClick} className='home_container' id='home_text'>
            <img className='logo_img' src={logo} alt='logo'  />
           </button>
        </section>
    )
}