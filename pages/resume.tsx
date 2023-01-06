import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resume Massyl</title>
        <meta name="Resume" content="Resume" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <div className="container">
        <div className="leftSide">
          <section className="beta-section">
          <div className="print-photo"><img className='photo' src="massylph.jpg" alt="Photo" /></div>
            <div className="containerC">
              <div className="card">
                <div className="front"><img className='photo' src="massylph.jpg" alt="Photo" /></div>
                <div className="back">
                  <div className="ButContentBack">
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr /><p className="titre">COORDONNÉES</p>
          <p className="text"><i className="fa fa-phone" aria-hidden="true"></i> +33661751400</p>
          <p className="text"><i className="fa fa-envelope" aria-hidden="true"></i> massyl.haddad@gmail.com</p>
          <p className="text"><i className="fa fa-globe" aria-hidden="true"></i> github.com/MassylHaddad</p>
          <p className="text"><i className="fa fa-linkedin" aria-hidden="true"></i> linkedin.com/massylhaddad</p>
          <p className="text"><i className="fa fa-map-marker" aria-hidden="true"></i> 9 rue Germaine Tailleferre, 94110 Arcueil</p>
          <hr /><p className="titre">OUTILS</p>
          <a href="/resume"><img className="git" src="/svg/git.svg" alt="git" /></a>
          <a href="/resume"><img className="docker" src="/svg/docker.svg" alt="docker" /></a>
          <a href="/resume"><img className="react" src="/svg/react.svg" alt="react" /></a>
          <a href="/resume"><img className="python" src="/svg/python.svg" alt="python" /></a>
          <a href="/resume"><img className="node" src="/svg/node.svg" alt="node" /></a>
          <a href="/resume"><img className="java" src="/svg/java.svg" alt="java" /></a>
          <a href="/resume"><img className="postgresql" src="/svg/postgresql.svg" alt="postgresql" /></a>
          <a href="/resume"><img className="fire" src="/svg/firebase.svg" alt="firebase" /></a>
          <a href="/resume"><img className="tail" src="/svg/tailwind.svg" alt="tailwind" /></a>
          <a href="/resume"><img className="php" src="/svg/php.svg" alt="php" /></a>
          <a href="/resume"><img className="mysql" src="/svg/MySQL.svg" alt="mysql" /></a>          
          <hr /><p className="titre">QUALITES</p>
          <p className="text">Autonomie</p>
          <p className="text">Implication</p>
          <p className="text">Rigueur</p>
          <p className="text">Travail d'équipe</p>
            
          <hr /><p className="titre">LANGUES</p>
          <p className="text">Anglais - Courant</p>
          <p className="text">Arabe - Courant</p>
          <p className="text">Français - Courant</p>
          <p className="text">Kabyle - Courant</p>
        
          <hr /><p className="titre">PASSE-TEMPS</p>
          <a href="/resume"><p className="text">Actualité scientifique</p></a>
          <a href="/resume"><p className="text">Jeux Video</p></a>
          <a href="/resume"><p className="text">Lecture (Software craftsmanship)</p></a>
          <a href="/resume"><p className="text">Méditation</p></a>


        </div>
        <div className="rightSide">
          <div className="BUT">
            <div className="ButContent">
              <p className="nom">Massyl HADDAD</p>
              <p className="goal">En recherche d'alternance <br /> en Development Fullstack </p>
              <p className="rhythm"> 2 semaines en entreprise / 1 semaine en école</p>
            </div>
          </div>
          <hr /><p className="titre">EXPERIENCES</p>
          <p className="text2g"> Août 2022 - Décembre 2022 ~ <abbr title="Fleury Merogis">Green Hôtel Fleury</abbr></p>
          <p className="textStatus">Employé polyvalent</p>
          <p className="text"> Entretien de l'hôtel, Réservations et Réception </p>
          <p className="text2g"> <hr /> 2021 - 2022 ~ <abbr title="">PROJET UNIVERSITAIRE </abbr></p>
          <p className="textStatus"> Etudiant </p>
          <div className="text"> <p> Algorithmes de plus court chemin en JavaScript/Node.js </p> <p> Réseau social en PHP </p> <p> Jeu 2D de bateau à voiles en Java </p></div>
          <p className="text2g"> <hr /> 2019 - 2020 ~ <abbr title="">PROJET UNIVERSITAIRE </abbr></p>
          <p className="textStatus"> Etudiant </p>
          <div className="text"> <p> Jeu 2D de voiture en C </p> <p> Algorithmes de Tri en C </p> <p>  Site en HTML / CSS </p> </div>
          <br /><hr /><br /><br /><br /><p className="titre">FORMATIONS</p>
          <p className="text2g"> 2022-2023 <abbr title="Ecole Privée des Sciences Informatiques">EPSI</abbr></p>
          <p className="textStatus"> Cycle Bachelor Development Web </p>
          <p className="text">DEVOPS : Concepteur Développeur d’Applications</p>
          <p className="text2g"> <hr /> 2019 - 2022 <abbr title="Université de Picardie Jules-Verne">UPJV</abbr></p>
          <p className="textStatus"> Cycle Licence Informatique</p>
          <p className="text">Projet universitaire : 2 sites, 2 jeux, 2 algorithmes</p>
          <p className="text2g"> <hr /> 2016-2019   <abbr title="Le Centre national d'enseignement à distance ">CNED</abbr></p>
          <p className="textStatus"> Filière lycée général ES </p>
          <p className="text">Option Mathématiques</p>

        </div>
      </div>
    </div>
  )
}
