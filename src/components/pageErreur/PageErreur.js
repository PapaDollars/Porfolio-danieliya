import Footer from "../footer/Footer";
import Header from "../header/Header";


function PageErreur() {
    return (
      <div className="PageErreur">
       
       <header>
            <Header />
        </header>

        <body>

            <p>Il semblerait que l’URL que vous avez saisie n’existe pas.</p>
            
        </body> 

        <footer>
            <Footer />
        </footer>
              
      </div>
    );
  }
  
  export default PageErreur;