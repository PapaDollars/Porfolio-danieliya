import Header from "../header/Header";
import './Contact.css';


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
        <div class="copywrites">
            @2024 IYA BOULAMDI DANIEL - Tous droits réservés
        </div>
      </footer>
    </div>
  );
}

export default Contact;