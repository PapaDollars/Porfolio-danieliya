import Footer from "../footer/Footer";
import Header from "../header/Header";
import './Porfolio.css';
import Iya from '../../assets/images/dollar.png';

function Porfolio() {
    return (
        <div className="Porfolio">
        <header>
          <div className='pb-3'>
            <Header />
          </div>
        </header>
  
        <body>
          <div className='container   pt-3'>
            <div class="row ">
                <div class="col">
                  <h3 class="titre_session">EXPERIENCES</h3>
                </div>
              </div>

              <div class="row row-cols-1 row-cols-md-3 g-4 p-5">
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">CENADI</h5>
                      <h6 class="card-text-h6">Garoua — Développeur Web</h6>
                      <p class="card-text">Août 2019 - Septembre 2019</p>
                      {/* <!-- <p class="card-text">DANWE DJASSAM JEAN PIERRE, Chef de Centre Informatique </p> --> */}
                      <p>Centre National de Développement Informatique (CENADI)</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">PRINVED</h5>
                      <h6 class="card-text-h6"> Maroua — Infographiste</h6>
                      <p class="card-text">Juillet 2022 - Août 2022</p>
                      {/* <!-- <p class="card-text">LEMONG ADJI, Promoteur </p> --> */}
                      <p>Programmation Innovation Économie Développement (PRINVED)</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={Iya} className="card-img-top" alt="title" />
                    <div class="card-body">
                      <h5 class="card-title">L'ACADEMIE JUSA</h5>
                      <h6 class="card-text-h6">  Yaoundé — Marketing Digital </h6>
                      <p class="card-text">Août 2023 - Août 2023</p>
                      {/* <!-- <p class="card-text">BRICE TCHAKOUNTE, Promoteur </p> --> */}
                      <p>Salon Africain de l'Education (SAED)</p>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col button">
                    <button type="button" class="btn btn-warning" >Voir plus</button>
                    {/* <!-- <button (click)="onMoreExperience()" type="button" class="btn btn-warning" >Voir plus</button> --> */}
                  </div>
              </div>
              </div>
          </div>
        </body>
  
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  
  export default Porfolio;