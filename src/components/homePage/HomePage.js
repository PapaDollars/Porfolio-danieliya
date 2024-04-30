import Header from "../header/Header";
import './HomePage.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Iya from '../../assets/images/dollar.png';


function HomePage() {
  return (
    <div className="HomePage">
     
     <header>
        <div className='pb-3'>
            <Header />
        </div>
      </header>

      <body>
        <div class="container-fluid">
          <div class="row description-card">
            <div class="col text-center">
                <Card sx={{ minWidth: 275 }} className="">
                  <CardContent>
                      <div className="row">
                        
                        <div className="col">
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              <h2> 
                                IYA BOULAMDI DANIEL
                              </h2>
                            </Typography>

                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                              <p className="text"> 
                                Je suis un jeune passionné de l'informatique et de technologies émergentes.
                                Mon objectif est de contribuer aux projets innovants et d'avoir un
                                impact dans le domaine de l'informatique. Je suis déterminé à relever de
                                nouveaux défis et à collaborer avec des équipes
                                dynamiques.
                              </p>
                            </Typography>

                            <Typography sx={{ fontSize: 14 }} className="icons" gutterBottom>
                                <a href="https://www.linkedin.com/in/daniel-iya" target='_blank' className='icon' rel="noopener noreferrer">
                                    <LinkedInIcon />
                                </a>
                                <a href="https://github.com/PapaDollars" target='_blank' className='p-3 icon' rel="noopener noreferrer">
                                    <GitHubIcon />
                                </a>
                                <a href="https://wa.me/237620256858" target='_blank' className='icon' rel="noopener noreferrer">
                                    <WhatsAppIcon />
                                </a>
                            </Typography>

                            <Typography sx={{ fontSize: 14 }} className="pt-3" gutterBottom>
                              <img src={Iya} className="description img-fluid" alt="title" />
                            </Typography>
                        </div>

                      </div>
                  </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </body>

      <footer>
        <div class="copywrites">
            @2024 IYA BOULAMDI DANIEL - Curriculum Vitae
        </div>
      </footer>
    </div>
  );
}

export default HomePage;