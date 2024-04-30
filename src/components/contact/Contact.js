import Header from "../header/Header";
import './Contact.css';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function Contact() {
  return (
    <div className="Contact">
     
     <header>
        <div className=''>
            <Header />
        </div>
      </header>

      <body>
        <div className="">
          <div class="contact-card">
          <div class="card mb-3" > {/*style="max-width: 900px;"*/}
              <div class="row g-0">
                  <div class="col-md-8">
                      <div class="card-body flex">
                          <h4 class="card-title pb-5 pt-4 user-select-none">Adresses</h4>
                          
                            <div class="row">
                              <div class="col">
                                <ul>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/user.png" alt=""> */}
                                    <PersonIcon className="icon" />
                                    IYA BOULAMDI DANIEL
                                  </p>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/envelope.png" alt=""> */}
                                    <MailIcon className="icon"/>
                                    <a href="#mail1" className="a">
                                    iyadaniel51@gmail.com
                                    </a>
                                  </p>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/phone-call.png" alt=""> */}
                                    <LocalPhoneIcon className="icon"/>
                                    +237 620 256 858
                                  </p>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/marker.png" alt=""> */}
                                    <LocationOnIcon className="icon"/>
                                    Nkolfoulou, Yaoundé
                                  </p>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/home.png" alt=""> */}
                                    <HomeIcon className="icon"/>
                                    Garoua, Nord
                                  </p>
                              </ul>
                              </div>
                              <div class="col">
                                <ul>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/flag.png" alt=""> */}
                                    <AssistantPhotoIcon className="icon"/>
                                    CAMEROUN
                                  </p>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/envelope.png" alt=""> */}
                                    <MailIcon className="icon"/>
                                    <a href="#mail2" className="a">
                                    daniel.iya@facsciences-uy1.cm
                                    </a>
                                  </p>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/phone-call.png" alt=""> */}
                                    <LocalPhoneIcon className="icon"/>
                                    +237 650 467 369
                                  </p>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/hand-holding-heart.png" alt=""> */}
                                    
                                    <PeopleAltIcon className="icon"/>
                                    Célibataire
                                  </p>
                                  <p class="user-select-none">
                                    {/* <img class="icon" src="assets/images/truck-side.png" alt=""> */}
                                    <DirectionsCarIcon className="icon"/>
                                    Permi B, Véhicule
                                  </p>
                              </ul>
                              </div>
                            </div>
                          
                      </div>
                  </div>
                  <div class="col-md-4">
                    {/* <img src="assets/images/contact.png" class="img-fluid rounded-start" alt="..."> */}
                  </div>
              </div>
            </div>
        </div>
            
        </div>
      </body>

      <footer>
        <div class="copywrites">
            @2024 IYA BOULAMDI DANIEL - Tous droits réservés
        </div>
      </footer>
    </div>
  );
}

export default Contact;