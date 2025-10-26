import '../styles/Master.css';
import pic1 from '../assets/C-Samuel.png';
import pic2 from '../assets/C-Daniel.png';
import pic3 from '../assets/C-Martial.png';
import pic4 from '../assets/C-Idris.png';
import affiche from '../assets/logo sport.jpg';
import sportlogo from '../assets/fonfinal.png';
import { FaMoneyBills, FaUsers } from "react-icons/fa6";
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Master() {
  const form = useRef();
  const [showInfo, setShowInfo] = useState(null);

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

  const toggleInfo = (id) => {
    setShowInfo(showInfo === id ? null : id);
  };

  // ==== Données ====
  const firstData = [
    { id: 1, icon: <FaUsers className='master_ico' />, title: "Nos coachs", link: "#masters" },
    { id: 2, icon: <FaMoneyBills className='master_ico' />, title: "Nos tarifs", link: "#prices" }
  ];

  const masters1 = [
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
  ];

  const master2 = [
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

  const allMasters = [...masters1, ...master2]; // fusion propre pour le formulaire

  const prices = [
    { id: 5, title: "Abonnement unique en ligne", prix: 3000 },
    { id: 6, title: "Abonnement mensuel en ligne", prix: 20000 },
    { id: 7, title: "Abonnement unique en salle", prix: 10000 },
    { id: 8, title: "Abonnement mensuel en salle", prix: 50000 },
  ];

  // ==== Rendu ====
  return (
    <section className='master_main'>
      {/* ---- Bloc 1 : Cartes d’accès ---- */}
      <div className='master_container' id='card'>
        {firstData.map((data) => (
          <div className='master_first' key={data.id}>
            {data.icon}
            <h4 className='master_title'>{data.title}</h4>
            <a href={data.link} className='master_link'>Voir plus</a>
          </div>
        ))}
      </div>

      {/* ---- Bloc 2 : Masters ---- */}
      <div className='master_container' id='masters'>
        {[masters1, master2].map((group, idx) => (
          <div className="master_card_container" key={idx}>
            {group.map((M) => (
              <div className="master_card_cont" key={M.id}>
                <div className="master_card">
                  <img className="master_img" src={M.img} alt={M.name} />
                  <button
                    className="master_link"
                    onClick={() => toggleInfo(M.id)}
                  >
                    {showInfo === M.id ? "Cacher" : "Découvrir"}
                  </button>
                </div>

                {showInfo === M.id && (
                  <div className="master_card_info">
                    <h4>{M.name}</h4>
                    <ul>
                      {M.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ---- Bloc 3 : Tarifs ---- */}
      <div className='master_container' id='prices'>
        {prices.map((P) => (
          <div className='master_prices_cont' key={P.id}>
            <h3 className='master_title'>{P.title}</h3>
            <h4 className='master_title'>{P.prix.toLocaleString()} FCFA</h4>
            <Link to="/About" className='master_link'>Voir plus</Link>
          </div>
        ))}
      </div>

      {/* ---- Bloc 4 : Formulaire ---- */}
      <div className='master_container' id='form'>
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
                {allMasters.map(master => (
                  <option key={master.id} value={master.name}>
                    {master.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="tarif">Tarif</label>
              <select id="tarif" name="tarif" required>
                <option value="">-- Sélectionnez --</option>
                {prices.map(price => (
                  <option
                    key={price.id}
                    value={`${price.title} - ${price.prix} FCFA`}
                  >
                    {price.title} - {price.prix.toLocaleString()} FCFA
                  </option>
                ))}
              </select>
            </div>

            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
}
