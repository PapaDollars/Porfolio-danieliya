import Footer from "../footer/Footer";
import Header from "../header/Header";


function Porfolio() {
    return (
        <div className="Porfolio">
        <header>
          <div className='pb-3'>
            <Header />
          </div>
        </header>
  
        <body>
          <div className='pt-5'>
              Porfolio
          </div>
        </body>
  
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  
  export default Porfolio;