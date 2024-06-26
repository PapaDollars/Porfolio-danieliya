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
import CopyRights from "../Copyright/Copyright";

function Contact() {
  return (
    <div className="Contact">
     
     <header>
        <div className='pb-5'>
            <Header />
        </div>
      </header>

      <body>
        <div className="container mt-5">
          <div class="card" > 
              <div class="row g-0">
                  <div class="col-md-8">
                      <div class="card-body flex">
                          <h4 class="card-title p-2 ">Adresses</h4>
                            <div class="row">
                              <div class="col">
                                <ul>
                                  <p>
                                    <PersonIcon className="icon" />
                                    IYA BOULAMDI DANIEL
                                  </p>
                                  <p>
                                    <MailIcon className="icon"/>
                                    <a href="#mail1" className="a">
                                    iyadaniel51@gmail.com
                                    </a>
                                  </p>
                                  <p>
                                    <LocalPhoneIcon className="icon"/>
                                    +237 620 256 858
                                  </p>
                                  <p>
                                    <LocationOnIcon className="icon"/>
                                    Nkolfoulou, Yaoundé
                                  </p>
                                  <p>
                                    <HomeIcon className="icon"/>
                                    Garoua, Nord
                                  </p>
                              </ul>
                              </div>
                              <div class="col">
                                <ul>
                                  <p>
                                    <AssistantPhotoIcon className="icon"/>
                                    CAMEROUN
                                  </p>
                                  <p>
                                    <MailIcon className="icon"/>
                                    <a href="#mail2" className="a">
                                    daniel.iya@facsciences-uy1.cm
                                    </a>
                                  </p>
                                  <p>
                                    <LocalPhoneIcon className="icon"/>
                                    +237 650 467 369
                                  </p>
                                  <p>                                    
                                    <PeopleAltIcon className="icon"/>
                                    Célibataire
                                  </p>
                                  <p>
                                    <DirectionsCarIcon className="icon"/>
                                    Permi B, Véhicule
                                  </p>
                                </ul>
                              </div>
                            </div>
                          
                      </div>
                  </div>
              </div>
            </div>
            
        </div>
      </body>

      <footer>
        <CopyRights/>
      </footer>
    </div>
  );
}

export default Contact;