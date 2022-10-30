import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="leftSide">
          <img src="Massyl.png" alt="Photo" />
          <ul className="COORDONNÉES">
            <span className="titre">COORDONNÉES</span><br /><br />
            <li>
              <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span><br />
              <span className="text0">0033661751400</span><br /><br />
            </li>
            <li>
              <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span><br />
              <span className="text0">massyl.haddad@gmail.com</span><br />
            </li>
            <li>
              <span className="icon"><i className="fa fa-globe" aria-hidden="true"></i></span><br />
              <a href="https://github.com/MassylHaddad"><span className="text0">github.com/MassylHaddad</span></a><br />
            </li>
            <li>
              <span className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></span><br />
              <a href="https://www.linkedin.com/in/massylhaddad/"><span
                className="text0">linkedin.com/massylhaddad</span></a><br />
            </li>
            <li>
              <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span><br />
              <a
                href="https://www.google.com/maps/place/8+All.+de+l'Universit%C3%A9,+92000+Nanterre/@48.9055148,2.2125969,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66460b7d812c5:0xd4b6550ef1642c70!8m2!3d48.9055113!4d2.2147856"><span
                  className="text0">9 rue Germaine Tailleferre, 94110 Arcueil</span></a><br />
            </li>
          </ul>
          <ul className="QUALITES">
            <span className="titre">QUALITES</span><br /><br />
            <li><span className="text">Travail d'équipe</span></li>
            <li><span className="text">Rigueur</span></li>
            <li><span className="text">Autonomie</span></li>
          </ul>
          <ul className="LANGUES">
            <span className="titre">LANGUES</span><br /><br />
            <li><span className="text">Français</span></li>
            <li><span className="text">Anglais</span></li>
            <li><span className="text">Kabyle</span></li>
          </ul>
          <ul className="PASSE-TEMPS">
            <span className="titre">PASSE-TEMPS</span><br /><br />
            <li>
              <span className="icon"><i className="fa fa-space-shuttle" aria-hidden="true"></i></span>
              <span className="text">Actualité scientifique</span>
            </li>
            <li>
              <span className="icon"><i className="fa fa-gamepad" aria-hidden="true"></i></span>
              <span className="text">Jeux Videos</span>
            </li>
            <li>
              <span className="icon"><i className="fa fa-book" aria-hidden="true"></i></span>
              <span className="text">Lecture (Software craftsmanship)</span>
            </li>
            <li>
              <span className="icon"><i className="fa fa-user-o" aria-hidden="true"></i></span>
              <span className="text">Meditation</span>
            </li>
          </ul>
        </div>
        <div className="rightSide">
          <ul className="BUT">
            <li><br /><br /><br /><br /><span className="nom">Massyl HADDAD</span> <br /> <br /> <br /></li>
            <li><span className="text2b">Alternance en Development Web</span> <br /><br /><br /><br /></li>
          </ul>
          <ul className="FORMATIONS">
            <span className="titre">FORMATIONS</span><br /><br />
            <div className="ul2">
              <li><span className="text2g"> 2022-2023 &nbsp </span><span className="text2g"> &nbsp <abbr
                title="Ecole Privée des Sciences Informatiques">EPSI</abbr></span></li>
              <li><span className="text2"> Cycle Bachelor Development Web </span></li>
            </div>
            <div className="ul2">
              <li><br /><span className="text2g"> 2019 - 2022 &nbsp </span><span className="text2g"> &nbsp <abbr
                title="Université de Picardie Jules-Verne">UPJV</abbr></span></li>
              <li><span className="textStatus"> Etudiant en Informatique </span></li>
              <li><span className="text2">Projet universitaire : 2 sites, 2 jeux, 2 algorithmes <br />
                (2 en C | 1 en PHP | 2 en JS)</span></li>
            </div>
            <div className="ul2">
              <li><span className="text2g"> 2016-2019 &nbsp </span><span className="text2g"> &nbsp <abbr
                title="Le Centre national d'enseignement à distance ">CNED</abbr></span></li>
              <li><span className="text2"> Filière lycée général ES </span></li>
            </div>
          </ul>
          <ul className="OUTILS">
            <span className="titre">OUTILS</span><br /><br />
            <div className="box">
              <div className="percent"><span className="over"> HTML & CSS </span>
                <div style={{ width: "72%" }}></div>
              </div>
            </div>
            <div className="box">
              <div className="percent"><span className="over"> Javascript </span>
                <div style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="box">
              <div className="percent"><span className="over"> C & Java</span>
                <div style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className="box">
              <div className="percent"><span className="over"> Git </span>
                <div style={{ width: "69%" }}></div>
              </div>
            </div>
          </ul>
          <ul className="EXPERIENCES">
            <span className="titre">EXPERIENCES</span><br />
            <div className="ul2">
              <li><br /><span className="text2g"> Août 2022 - &nbsp </span><span className="text2g"> &nbsp <abbr
                title="Fleury Merogis">Green Hôtel Fleury</abbr></span></li>
              <li><span className="textStatus">Employé polyvalent</span></li>
              <li><span className="text2">Réception & Réservations <br /> Entretiens de l'hôtel </span> </li>
            </div>
            <div className="ul2">
              <li><br /><span className="text2g"> 2015 - 2019 &nbsp </span><span className="text2g"> &nbsp <abbr title="">Bureau
                d'Avocat</abbr></span></li>
              <li><span className="textStatus"> Agent de saisie </span></li>
              <li><span className="text2">Emploie a mi temps. Saisie de documents</span></li>
            </div>
            <div className="ul2">
              <li><br /><span className="text2g"> 2014 &nbsp </span><span className="text2g"> &nbsp <abbr
                title="Entreprise nationale de télévision">ENTV</abbr></span></li>
              <li><span className="textStatus"> Figurant </span></li>
              <li><span className="text2">Passage série télévisée <br /> et immersion dans les coullisses</span></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}