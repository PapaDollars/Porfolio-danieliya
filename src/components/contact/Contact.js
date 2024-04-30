import Footer from "../footer/Footer";
import Header from "../header/Header";


function Contact() {
  return (
    <div className="Contact">
     
     <header>
        <div className='pb-3'>
            <Header />
        </div>
      </header>

      <body>
        <div className='pt-5'>
            Contact
            
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;