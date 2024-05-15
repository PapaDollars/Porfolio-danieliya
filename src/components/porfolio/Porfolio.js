import Footer from "../footer/Footer";
import Header from "../header/Header";
import './Porfolio.css';
import Divider from '@mui/material/Divider';
import Iya0 from '../../assets/images/dollar0.png';
import Iya1 from '../../assets/images/dollar1.png';
import Iya2 from '../../assets/images/dollar2.png';
import Iya3 from '../../assets/images/dollar3.png';
import Iya4 from '../../assets/images/dollar4.png';
import Iya5 from '../../assets/images/dollar5.png';
import Iya6 from '../../assets/images/dollar6.png';
import Iya7 from '../../assets/images/dollar7.png';
import Iya8 from '../../assets/images/dollar8.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Porfolio() {
    return (
        <div className="Porfolio">
        <header>
          <div className='pb-5'>
            <Header />
          </div>
        </header>
  
        <body>
          <div className='container pt-5'>
            <div class="row ">
                <div class="col">
                  <h3 class="titre_session">EXPERIENCES</h3>
                </div>
              </div>

              <div class="row row-cols-1 row-cols-md-3 g-4 p-4">
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya5} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title text-info">CENADI</h5>
                      <h6 class="card-text-h6">Garoua — Développeur Web</h6>
                      <p class="card-text">Août 2019 - Septembre 2019</p>
                      {/* <!-- <p class="card-text">DANWE DJASSAM JEAN PIERRE, Chef de Centre Informatique </p> --> */}
                      <p>Centre National de Développement Informatique (CENADI)</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya4} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title text-info">PRINVED</h5>
                      <h6 class="card-text-h6"> Maroua — Infographiste</h6>
                      <p class="card-text">Juillet 2022 - Août 2022</p>
                      {/* <!-- <p class="card-text">LEMONG ADJI, Promoteur </p> --> */}
                      <p>Programmation Innovation Économie Développement (PRINVED)</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya7} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title text-info">L'ACADEMIE JUSA</h5>
                      <h6 class="card-text-h6">  Yaoundé — Marketing Digital </h6>
                      <p class="card-text">Août 2023 - Août 2023</p>
                      {/* <!-- <p class="card-text">BRICE TCHAKOUNTE, Promoteur </p> --> */}
                      <p>Salon Africain de l'Education (SAED)</p>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col button">
                    {/* <button type="button" class="btn btn-primary" >Voir plus</button> */}
                    {/* <!-- <button (click)="onMoreExperience()" type="button" class="btn btn-warning" >Voir plus</button> --> */}
                  </div>
              </div>
              </div>

              <Divider></Divider>

              <div class="row ">
                <div class="col">
                  <h3 class="titre_session2 pt-5">PROJETS</h3>
                </div>
              </div>

              <div class="row row-cols-1 row-cols-md-4 g-4 p-4 projet">
              <div class="col">
                  <div class="card h-100">
                    <img src={Iya3} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">Plateforme de Freelance</h5>
                      <h6 class="card-text-h6 text-info">REACT JS</h6>
                      <p class="card-text"> 
                        <ul>
                          <li>Connect : captiver l'audience avec une présence digitale</li>
                          <li>Design : valoriser la communication visuelle </li>
                          <li>Trader : devenez un trader accompli </li>
                          <li>
                            <a href="https://groupemergent.vercel.app/" target='_blank' rel="noopener noreferrer">
                              Voir plus... 
                            </a>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya3} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">Plateforme de Travail Collaboratif</h5>
                      <h6 class="card-text-h6 text-info">REACT JS</h6>
                      <p class="card-text"> 
                        <ul>
                          <li>Mise en œuvre d'un middleware pour gérer l'authentification et les
                              autorisations d'accès aux messages de plus de 50 000 utilisateurs
                          </li>
                          <li>Intégration d'API de vidéoconférence  avec ExpressJS...</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya3} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">Application PWA de génération de Curriculum Vitae</h5>
                      <h6 class="card-text-h6 text-info">ANGULAR</h6>
                      <p class="card-text">
                        <ul> 
                          <li>Structuration des données utilisateurs avec Firebase
                          </li>
                          <li>Génération automatique des templates
                          </li>
                          <li>Téléchargement sous le format PDF....
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya3} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">Application de e-commerce </h5>
                      <h6 class="card-text-h6 text-info">JAVA</h6>
                      <p class="card-text">
                        <ul>
                          <li>Consultation et authentification pour passer les commandes
                          </li>
                          <li> Prévisualisation de la précommande
                          </li>
                          <li>Structuration de la base de donnée avec MySQL
                          </li>
                          <li>Implémentation du CRUD des produits</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya3} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">Application de Gestion des Emplois de Temps </h5>
                      <h6 class="card-text-h6 text-info">C#</h6>
                      <p class="card-text">
                        <ul>
                          <li>Gestion de la base de donnée avec MySQL
                          </li>
                          <li>Implémentation des fonctionnalités CRUD (Créer, Lire, Modifier et
                                Supprimer) des enseignants, leur unité....
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col button">
                    {/* <button type="button" class="btn btn-warning" >Voir plus</button> */}
                  </div>
              </div>
              </div>

              <Divider className="pt-5"></Divider>

              <div class="row ">
                <div class="col">
                  <h3 class="titre_session_formation pt-5">FORMATION</h3>
                </div>
              </div>

              <div class="row row-cols-1 row-cols-md-3 g-4 p-4 formation">
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya6} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">Université de Yaoundé I</h5>
                      <h6 class="card-text-h6">  Licence Professionnelle, Informatique, Génie Logiciel </h6>
                      <p class="card-text">Octobre 2020 - Juillet 2023</p>
                      <p>Information Communication Technology for Development (ICT4D)</p>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col button">
                    {/* <button type="button" class="btn btn-warning" >Voir plus</button> */}
                  </div>
              </div>
              </div>

              <Divider className="pt-5"></Divider>

              <div class="row ">
                <div class="col">
                  <h3 class="titre_session2 pt-5 pb-3">CERTIFICATS ET LICENCES</h3>
                </div>
              </div>

              <div class="row row-cols-1 row-cols-md-4 g-4 p-4 certificat">
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya2} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">OpenClassrooms</h5>
                      <h6 class="card-text-h6">Développez des sites web - Java EE</h6>
                      <p class="card-text">Mai 2023</p>
                      <p><a href="https://openclassrooms.com/fr/course-certificates/8950459566" className="text-decoration-none" target='_blank' rel="noopener noreferrer">
                        Voir la certification</a></p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya8} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">OpenClassrooms</h5>
                      <h6 class="card-text-h6">Débutez avec Angular</h6>
                      <p class="card-text">Décembre 2023</p>
                      <p><a href="https://openclassrooms.com/fr/course-certificates/9785544150" className="text-decoration-none" target='_blank' rel="noopener noreferrer">
                        Voir la certification</a></p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya0} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">freeCodeCamp.org</h5>
                      <h6 class="card-text-h6">Responsive Web Design</h6>
                      <p class="card-text">Novembre 2023</p>
                      <p><a href="https://www.freecodecamp.org/certification/IYA_BOULAMDI_DANIEL/responsive-web-design" className="text-decoration-none" target='_blank' rel="noopener noreferrer">
                        Voir la certification</a></p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya1} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">OpenClassrooms</h5>
                      <h6 class="card-text-h6">Travaillez efficacement en équipe</h6>
                      <p class="card-text">Novembre 2023</p>
                      <p><a href="https://openclassrooms.com/fr/course-certificates/3094693767" className="text-decoration-none" target='_blank' rel="noopener noreferrer"  >
                        Voir la certification</a></p>
                    </div>
                  </div>
                </div>

                <Divider className=""></Divider>
                

                {/* <div className="contianer-fluid"> */}
                <div class="row pt-5">
                  <div class="col">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography className="TitleTypography1">
                          <h4>COMPÉTENCES</h4>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul>
                              <li>Développeur Web
                              </li>
                              <li>Infographiste
                              </li>
                              <li>Community Manager
                              </li>
                              <li> Freelancer
                              </li>
                              <li>YouTuber
                              </li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>

                <div class="row pt-5">
                  <div class="col">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography>
                          <h4 className="TitleTypography">QUALITÉS</h4>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul>
                              <li>Reactjs, Angular, HTML
                              </li>
                              <li>Nodejs/Expressjs, C#, Java,
                                  JavaScript/Jquery, Mysql
                              </li>
                              <li> Bootstrap, CSS, primeNG
                              </li>
                              <li>Git / GitHub
                              </li>

                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>

                <div class="row pt-5">
                  <div class="col">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography className="TitleTypography1">
                          <h4>LOGICIELS & OS</h4>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul>
                              <li>PowerDesigner - Très bien
                              </li>
                              <li>Adobe photoshop - Excellent
                              </li>
                              <li>Microsoft Office - Très bien
                              </li>
                              <li>Microsoft Visual Studio. - Très bien
                              </li>
                              <li>Windows/Lunix - Excellent
                              </li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
                {/* </div> */}
              
              </div>
          </div>
        </body>

            <Divider className="pt-5"></Divider>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  
  export default Porfolio;
