import '../styles/Master.css';
import pic1 from '../assets/C-Samuel.png';
import pic2 from '../assets/C-Daniel.png';
import pic3 from '../assets/C-Martial.png';
import pic4 from '../assets/C-Idris.png';
import affiche from '../assets/logo sport.jpg';
import sportlogo from '../assets/fonfinal.png';
import { useState, useEffect } from 'react';

export default function Master() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [networkStatus, setNetworkStatus] = useState(navigator.onLine);
    const [formError, setFormError] = useState(null);

    // Vérification de la connexion réseau
    useEffect(() => {
        const handleOnline = () => setNetworkStatus(true);
        const handleOffline = () => setNetworkStatus(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormError(null);

        if (!networkStatus) {
            setFormError("Pas de connexion Internet. Veuillez vérifier votre réseau.");
            setIsSubmitting(false);
            return;
        }

        const form = e.target;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

        try {
            // Solution hybride: Essayez d'abord avec FormData, puis fallback JSON si échec
            let response;
            let error;

            // Essai 1: Envoi avec FormData (meilleure compatibilité)
            try {
                const formData = new FormData(form);
                response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    signal: controller.signal,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
            } catch (formDataError) {
                error = formDataError;
                // Essai 2: Fallback avec JSON
                const jsonData = Object.fromEntries(new FormData(form));
                response = await fetch(form.action, {
                    method: 'POST',
                    body: JSON.stringify(jsonData),
                    signal: controller.signal,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
            }

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            setFormSubmitted(true);
            form.reset();
        } catch (error) {
            console.error("Erreur complète:", error);
            setFormError(
                `Échec de l'envoi: ${error.message}\n` +
                "Veuillez réessayer ou nous contacter directement par téléphone."
            );
            
            // Fallback ultime: Ouvrir le client mail
            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                setFormError(prev => prev + "\n\nNous allons ouvrir votre application de messagerie...");
                setTimeout(() => {
                    window.location.href = `mailto:thebeesport13@gmail.com?subject=Demande de coaching&body=Bonjour, je souhaite m'inscrire au coaching.`;
                }, 2000);
            }
        } finally {
            setIsSubmitting(false);
            clearTimeout(timeoutId);
        }
    };

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
                            loading="lazy" // Optimisation pour mobile
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
                    {formSubmitted ? (
                        <div className="success-message">
                            <h3>Merci !</h3>
                            <p>Vos données ont été envoyées avec succès.</p>
                            <p>Nous vous contacterons dans les plus brefs délais.</p>
                        </div>
                    ) : (
                        <>
                            {formError && (
                                <div className="error-message">
                                    <p>{formError.split('\n').map((line, i) => (
                                        <span key={i}>{line}<br/></span>
                                    ))}</p>
                                </div>
                            )}
                            <form 
                                action="https://formsubmit.co/thebeesport13@gmail.com" 
                                method="POST" 
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="_subject" value="Nouvelle demande de coaching" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value="/" />
                                <input type="hidden" name="_autoresponse" value="Merci pour votre message!" />
                                <input type="hidden" name="_blacklist" value="spamterm, badterm" />
                                
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
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    aria-busy={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span>Envoi en cours...</span>
                                    ) : (
                                        <span>S'inscrire</span>
                                    )}
                                </button>
                                {!networkStatus && (
                                    <p className="network-warning">
                                        ⚠ Vous semblez hors ligne. La soumission nécessite une connexion Internet.
                                    </p>
                                )}
                            </form>
                        </>
                    )}
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