import '../styles/Home.css';
import { Link } from 'react-router-dom';
import affiche from '../assets/fond1.jpg'
import post1 from '../assets/S1.jpg';
import post2 from '../assets/S2.jpg';
import post3 from '../assets/S3.jpg';
import post4 from '../assets/S4.jpg';

import m1 from '../assets/C-Samuel.jpg';
import m2 from '../assets/C-Idris.jpg';
import m3 from '../assets/C-Martial.jpg';

export default function Home() {

    const presentation = [
            "Choisir un coach",
            "contacter le",
            "trouver un accord tous les deux",
            "travailler main dans la main",
        ];

    const picture = [
        {id:1, image: post1, name:"sport de combat"},
        {id:2, image: post2, name:"fitness"},
        {id:3, image: post3, name:"consile nutritionnel"},
        {id:4, image: post4, name:"muscu"},
    ];

    const prices = [
        {id:5, title: "Abonnement unique en ligne", prix: 3000 , info: "via votre écran avec votre coach"},
        {id:6, title: "Abonnement mensuel en ligne", prix: 20000 , info: "via votre écran avec votre coach"},
        {id:7, title: "Abonnement unique en salle", prix: 10000 , info: "dans une salle de votre choix d'un commun accord entre votre coach, vous et la salle trouvée"},
        {id:8, title: "Abonnement mensuel en salle", prix: 50000 , info: "dans une salle de votre choix d'un commun accord entre votre coach, vous et la salle trouvée"},
    ];

    const masters = [
        {id: 9, image: m1},
        {id: 10, image: m2},
        {id: 11, image: m3},
    ]



    return(
        <section className='home_main'>
            <div className='home_content_img'>
                 <img src={affiche} className='home_img' alt='affiche'></img>
            </div>

            <div className='home_content'>
                <h2 className='home_text'>
                      TheBeeSportCam est une plateforme en ligne qui met en relation des coachs sportifs qualifiés 
                     <p>avec des personnes souhaitant améliorer leur condition physique.</p> 
                     <p>Le site permet de trouver facilement un coach adapté à ses besoins, que ce soit pour des séances en salle ou en ligne.</p>
                </h2>

                <ul className='home_list'>
                    {presentation.map((item, idx) => (
                        <li className='home_list2' key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

             <div className='home_content'>
                <h2>
                    <p>Nos</p>
                    <p>Activités </p>
                </h2>
                {picture.map((pic) => (
                    <div className='home_box2' key={pic.id}>
                       <img className='home_img_box2' src={pic.image} alt='photo'></img>
                       <h4 className='home_text2'>{pic.name}</h4>
                    </div>
                ))}
            </div>

             <div className='home_content'>
                  <h2>
                    <p>Nos</p>
                    <p>Tarifs </p>
                </h2>
                {prices.map((price) => (
                    <article className='home_box3' key={price.id}>
                       <h4 className='home_text3'>
                        <p>{price.title}</p>
                        <p>{price.prix} fcfa</p>
                        <p>{price.info}</p>
                       </h4>
                    </article>
                ))}
            </div>

            <div className='home_content'>
                {masters.map((master) => (
                    <div className='home_box4' key={master.id}>
                       <img className='home_img_box3' src={master.image} alt='photo'></img>
                       <Link to='/Master'>
                       <button className='home_bt'>
                        Découvrez nos coachs
                       </button>
                       </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}