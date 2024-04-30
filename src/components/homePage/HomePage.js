import Header from "../header/Header";
import './HomePage.css';


function HomePage() {
  return (
    <div className="HomePage">
     
     <header>
        <div className='pb-3'>
            <Header />
        </div>
      </header>

      <body>
        <div className="container-fluid">
          <div className="row p-5">
            <div className='col'>
                Je suis un jeune passionné de l'informatique et de technologies émergentes. Mon objectif est de contribuer aux projets innovants et d'avoir un impact dans le domaine de l'informatique. Je suis déterminé à relever de nouveaux défis et à collaborer avec des équipes dynamiques.
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

export default HomePage;