import Footer from "../footer/Footer";
import Header from "../header/Header";
import './PageErreur.css';


function PageErreur() {
    return (
      <div className="PageErreur">
       
       <header>
            <Header />
        </header>

        <body>

            <div className="m-5 p-5">
              <p className="text-danger text-center">Il semblerait que l'URL(.../*-* ) que vous avez saisie n'existe pas !</p>
            </div>
            
        </body> 

        <footer className='fixedFooter'>
            <Footer />
        </footer>
              
      </div>
    );
  }
  
  export default PageErreur;