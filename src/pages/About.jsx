import '../styles/About.css';
import { Link } from 'react-router-dom';

export default function About() {
    const InfoData1 = {
    title: "Qu'est-ce que TheBeesport ?",
    text: "Bienvenue chez TheBeesport — une salle de sport dynamique où passion, performance et esprit d’équipe se rencontrent ! Notre équipe vous accompagne dans la pratique de multiples activités : boxe, fitness, musculation, et bien d’autres disciplines adaptées à tous les niveaux. Que vous veniez pour vous remettre en forme, vous dépasser ou simplement vous amuser, TheBeesport est l’endroit idéal pour progresser dans une ambiance conviviale et motivante.\n\nRejoignez la ruche — ensemble, faisons de chaque séance une victoire ! 🐝💪"
};

const InfoData2 = {
    title: "Notre objectif",
    text: "TheBeesport : votre salle de sport, à la maison.\n\nImaginez une plateforme qui transforme votre espace en véritable studio de sport. TheBeesport vous permet de suivre des cours en direct et interactifs, animés par des coachs professionnels, depuis le confort de votre domicile.\n\nGrâce à un simple écran, accédez à une multitude d’activités et bénéficiez des conseils personnalisés d’experts, comme si vous y étiez. Plus besoin de trajets ou d’horaires contraignants : la motivation et l’expertise viennent à vous.\n\nTheBeesport, c’est le sport en ligne avec l’énergie et l’encadrement du présentiel."
};

const InfoData3 = {
    title: "Comment fonctionnons-nous ?",
    text: "1️⃣ **Trouvez votre coach** : explorez notre plateforme pour découvrir nos coachs, leurs spécialités et leurs performances. Comparez leurs profils et leurs tarifs pour faire le bon choix.\n\n2️⃣ **Demande simplifiée** : lorsque vous avez trouvé la perle rare, effectuez une demande via un simple formulaire.\n\n3️⃣ **Mise en relation** : une fois votre coach sélectionné, nous nous chargeons de vous mettre directement en contact.\n\n4️⃣ **Programme sur mesure** : ensemble, vous élaborerez un plan d’entraînement personnalisé, parfaitement adapté à vos objectifs.\n\nAvec TheBeesport, atteignez vos ambitions sportives grâce à un accompagnement professionnel et un programme conçu spécialement pour vous."
};

const InfoData4 = {
    title: "Comprendre nos tarifs",
    text: "Chez TheBeesport, nos tarifs s’adaptent à vos besoins et à votre mode d’entraînement.\n\nNous proposons deux grandes formules : **les séances en ligne** et **les séances en salle**.\n\n💻 **Séances en ligne** : un abonnement mensuel unique et accessible, qui vous permet de suivre vos entraînements en toute liberté, où que vous soyez.\n\n🏋️‍♂️ **Séances en salle** : un tarif mensuel unique également, mais avec une flexibilité supplémentaire. Le coach et le client choisissent ensemble la salle de sport qui leur convient, puis s’accordent avec le propriétaire avant de débuter les séances.\n\nAvec TheBeesport, la transparence et la flexibilité sont au cœur de notre approche — pour que chaque séance soit un plaisir, sans surprise."
};

const BigInfo = [
    InfoData1, InfoData2, InfoData3, InfoData4
];

    return(
        <section className='about_main'>
            {BigInfo.map((D, idx) => (
  <div key={idx} className='about_container'>
    <h3 className='about_title'>{D.title}</h3>
    <h4 className='about_text'>{D.text}</h4>
  </div>
))}

        </section>
    )
}