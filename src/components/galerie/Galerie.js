import Footer from "../footer/Footer";
import Header from "../header/Header";


function Galerie() {
  return (
    <div className="Galerie">
     
     <header>
        <div className='pb-3'>
            <Header />
        </div>
      </header>

      <body>
        <div className='pt-5'>
            Galerie
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Galerie;