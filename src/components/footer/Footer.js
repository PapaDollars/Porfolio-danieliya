import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Divider from '@mui/material/Divider';


function Footer() {
  return (
    <>
        <div class="container-fluid">
            <div class="row p-5" >
                <div class="col">
                <h4>IYA BOULAMDI DANIEL</h4>
                <p> 
                    Je suis un jeune passionné de l'informatique et de technologies émergentes. Mon objectif est de contribuer aux projets innovants et d'avoir un impact dans le domaine de l'informatique. Je suis déterminé à relever de nouveaux défis et à collaborer avec des équipes dynamiques.
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
                </>
                </div>
                <div class="col">
                <h4> COMPÉTENCES </h4>
                <ul>
                    <li>
                    Développeur Front-End
                    </li>
                    <li>
                    Infographiste
                    </li>
                    <li>
                    Développeur applications de bureau
                    </li>
                    <li>
                    Community Manager
                    </li>
                    <li>
                    Freelancer
                    </li>
                    <li>
                    YouTuber
                    </li>
                </ul>
                </div>
                
                <div class="col ">
                <h4>Addresse</h4>
                    <p>
                    Yaoundé, CAMEROUN
                    </p>
                    <p>
                    +237 620 256 858/+237 650 467 369
                    </p>
                    <p>
                    iyadaniel51@gmail.com
                    </p>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <div class="copywrite">
            @2024 Curriculum Vitae - IYA BOULAMDI DANIEL
        </div>
    </>
  );
}

export default Footer;