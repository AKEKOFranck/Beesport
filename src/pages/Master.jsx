import '../styles/Master.css';
import pic1 from '../assets/C-Samuel.jpg';
import pic2 from '../assets/C-Daniel.jpg';
import pic3 from '../assets/C-Martial.jpg';
import pic4 from '../assets/C-Idris.jpg';
import affiche from '../assets/logo sport.jpg';
import sportlogo from '../assets/fonfinal.png'

export default function Master() {
    const masters = [
        {id:1 , name:"Coach Samuel" , img: pic1 , items:[
            "Bodyattack",
            "Gym santé ",
            "Fitness et musculation ",
            "Boxe anglaise ",
            "Conseil en nutrition",
            "CrossFit",
        ]},
        {id:2 , name:"Coach Daniel" , img: pic2 , items:[
            "fitness",
            "renforcement musculaire",
            "stretching",
            "yoga",
        ]},
        {id:3 , name:"Coach Martial" , img: pic3 , items:[
            "Perte de poids",
            "prise de masse musculaire",
            "préparation physique",
            "REATHLETISATION",
            "RENFORCEMENT MUSCULAIRE",
            "fitness",
        ]},
        {id:4 , name:"Coach Idris" , img: pic4 , items:[
            "perte de poids ",
            "Entretien et maîtrise du corps",
            "bodybuilding",
            "rafermissement fessier",
        ]},
    ];

     const prices = [
        {id:5, title: "Abonnement unique en ligne", prix: 3000 , info: "via votre écran avec votre coach"},
        {id:6, title: "Abonnement mensuel en ligne", prix: 20000 , info: "via votre écran avec votre coach"},
        {id:7, title: "Abonnement unique en salle", prix: 10000 , info: "dans une salle de votre choix d'un commun accord entre votre coach, vous et la salle trouvée"},
        {id:8, title: "Abonnement mensuel en salle", prix: 50000 , info: "dans une salle de votre choix d'un commun accord entre votre coach, vous et la salle trouvée"},
    ];

    return (
        <section className='master_main'> 
            <h1 className='master_title'>Bienvenue sur la page des coachs sportifs !</h1>

            <div className='master_content'>
                {masters.map((master) => (
                    <div className='master_box' key={master.id}>
                        <img className='master_img' src={master.img} alt={master.name} />
                        <h3 className='master_text'>{master.name}</h3>
                        <ul className='master_list1'>
                            {master.items.map((item, idx) => (
                                <li className='master_list2' key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className='master_content2'>
                 <h2>
                    <p>Nos</p>
                    <p>Tarifs </p>
                </h2>
                <div className='master_price'>
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
            </div>

            <div className='master_form'>
                <img className='master_logo' src={affiche} alt='affiche' /> 
                <div className="form-container">
                    <form action="https://formsubmit.co/thebeesport13@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="Nouvelle demande de coaching" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="/" />
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" id="nom" name="nom" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prenom">Prénom</label>
                            <input type="text" id="prenom" name="prenom" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Téléphone</label>
                            <input type="tel" id="telephone" name="telephone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="coach">Coach</label>
                            <select id="coach" name="coach" required>
                                <option value="">-- Sélectionnez --</option>
                                {masters.map(master => (
                                    <option key={master.id} value={master.name}>{master.name}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit">S'inscrire</button>
                    </form>
                </div>
            </div>

            <div className='master_final'>
                <img className='master_final_img' src={sportlogo} alt='logo'></img>
            </div>
        </section>
    );
}