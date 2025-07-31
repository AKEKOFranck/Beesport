import '../styles/Master.css';
import pic1 from '../assets/C-Samuel.png';
import pic2 from '../assets/C-Daniel.png';
import pic3 from '../assets/C-Martial.png';
import pic4 from '../assets/C-Idris.png';
import affiche from '../assets/logo sport.jpg';
import sportlogo from '../assets/fonfinal.png';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

export default function Master() {
    const form = useRef();

    const sendEmail = async (e) => {
  e.preventDefault();
  const submitBtn = e.target.querySelector('button[type="submit"]');
  
  try {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi...';

    const response = await emailjs.sendForm(
      'service_oda78gr',
      'template_d7nlwwa',
      form.current,
      'N38ID-rh2GFZxvp98'
    );

    if (response.status === 200) {
      form.current.reset();
      alert('Message envoyé avec succès !');
    }
  } catch (err) {
    console.error('Erreur mobile:', err);
    alert(`Échec d'envoi: ${err.message || 'Réseau instable'}`);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer';
  }
};

    const masters = [
        {
            id: 1,
            name: "Coach Samuel",
            img: pic1,
            items: [
                "Bodyattack",
                "Gym santé",
                "Fitness et musculation",
                "Boxe anglaise",
                "Conseil en nutrition",
                "CrossFit",
            ]
        },
        {
            id: 2,
            name: "Coach Daniel",
            img: pic2,
            items: [
                "Fitness",
                "Renforcement musculaire",
                "Stretching",
                "Yoga",
            ]
        },
        {
            id: 3,
            name: "Coach Martial",
            img: pic3,
            items: [
                "Perte de poids",
                "Prise de masse musculaire",
                "Préparation physique",
                "Réathlétisation",
                "Renforcement musculaire",
                "Fitness",
            ]
        },
        {
            id: 4,
            name: "Coach Idris",
            img: pic4,
            items: [
                "Perte de poids",
                "Entretien et maîtrise du corps",
                "Bodybuilding",
                "Raffermissement fessier",
            ]
        },
    ];

    const prices = [
        {
            id: 5,
            title: "Abonnement unique en ligne",
            prix: 3000,
            info: "via votre écran avec votre coach"
        },
        {
            id: 6,
            title: "Abonnement mensuel en ligne",
            prix: 20000,
            info: "via votre écran avec votre coach"
        },
        {
            id: 7,
            title: "Abonnement unique en salle",
            prix: 10000,
            info: "dans une salle de votre choix d'un commun accord entre votre coach, vous et la salle trouvée"
        },
        {
            id: 8,
            title: "Abonnement mensuel en salle",
            prix: 50000,
            info: "dans une salle de votre choix d'un commun accord entre votre coach, vous et la salle trouvée"
        },
    ];

    return (
        <section className='master_main'>
            <h1 className='master_title'>Bienvenue sur la page des coachs sportifs !</h1>

            <div className='master_content'>
                {masters.map((master) => (
                    <div className='master_box' key={master.id}>
                        <img 
                            className='master_img' 
                            src={master.img} 
                            alt={master.name} 
                            loading="lazy"
                        />
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
                    <p>Tarifs</p>
                </h2>
                <div className='master_price'>
                    {prices.map((price) => (
                        <article className='home_box3' key={price.id}>
                            <h4 className='home_text3'>
                                <p>{price.title}</p>
                                <p>{price.prix.toLocaleString()} fcfa</p>
                                <p>{price.info}</p>
                            </h4>
                        </article>
                    ))}
                </div>
            </div>

            <div className='master_form'>
                <img 
                    className='master_logo' 
                    src={affiche} 
                    alt='Logo The Bee Sport'
                    loading="lazy"
                />
                <div className="form-container">
                    <form onSubmit={sendEmail} ref={form}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                inputMode="email"
                                autoComplete="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input 
                                type="text" 
                                id="nom" 
                                name="nom" 
                                required 
                                autoComplete="family-name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prenom">Prénom</label>
                            <input 
                                type="text" 
                                id="prenom" 
                                name="prenom" 
                                required 
                                autoComplete="given-name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Téléphone</label>
                            <input 
                                type="tel" 
                                id="telephone" 
                                name="telephone" 
                                required 
                                inputMode="tel"
                                autoComplete="tel"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="coach">Coach</label>
                            <select id="coach" name="coach" required>
                                <option value="">-- Sélectionnez --</option>
                                {masters.map(master => (
                                    <option key={master.id} value={master.name}>
                                        {master.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tarif">Tarifs</label>
                            <select id="tarif" name="tarif" required>
                                <option value="">-- Sélectionnez --</option>
                                {prices.map(price => (
                                    <option key={price.id} value={`${price.title} - ${price.prix} fcfa`}>
                                        {price.title} - {price.prix.toLocaleString()} fcfa
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>

            <div className='master_final'>
                <img 
                    className='master_final_img' 
                    src={sportlogo} 
                    alt='The Bee Sport - Fitness et Coaching'
                    loading="lazy"
                />
            </div>
        </section>
    );
}