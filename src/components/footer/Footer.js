import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';


function Footer() {
  return (
    <>
        <div class="container-fluid">
            <div class="row p-5" >
                <div class="col">
                <h4 className='align h4'> LANGUES </h4>
                <ul>
                    <li>Français - Courant(e)
                    </li>
                    <li>Anglais - Intermédiaire
                    </li>
                </ul>
                </div>
                
                <div class="col ">
                <h4 className='align h4'>CENTRES D'INTÉRÊT</h4>
                <ul>
                    <li> Football
                    </li>
                    <li>Jeux vidéos
                    </li>
                    <li>Musique
                    </li>
                </ul>
                </div>

                <div class="col ">
                <h4 className='align h4'>ADRESSES</h4>
                    <p>Yaoundé, CAMEROUN
                    </p>
                    <>
                    <a href="https://www.linkedin.com/in/daniel-iya" target='_blank' className='a' rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/PapaDollars" target='_blank' className='p-3 a' rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                    <a href="https://wa.me/237620256858" target='_blank' className='a' rel="noopener noreferrer">
                        <WhatsAppIcon />
                    </a>
                    <a href="#mail" target='_blank' className='p-3 a' rel="noopener noreferrer">
                        <MailIcon />
                    </a>
                    </>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <div class="copywrite">
            Copyright ©2024 IYA BOULAMDI DANIEL
        </div>
    </>
  );
}

export default Footer;