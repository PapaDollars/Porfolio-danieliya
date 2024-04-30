import './Footer.css';

function Footer() {
  return (
    <>
        <div class="container-fluid">
            <div class="row p-5" >
                <div class="col">
                <h4 class="user-select-none">IYA BOULAMDI DANIEL</h4>
                <p class="user-select-none"> 
                    Je suis un jeune passionné de l'informatique et de technologies émergentes. Mon objectif est de contribuer aux projets innovants et d'avoir un impact dans le domaine de l'informatique. Je suis déterminé à relever de nouveaux défis et à collaborer avec des équipes dynamiques.
                </p>
                    {/* <a href="#" target="_blank" ><img class="icon user-select-none" src="assets/images/linkedin.png" alt="" /></a>
                    <img class="icon user-select-none" src="assets/images/github.png" alt=""/>
                    <img class="icon user-select-none" src="assets/images/whatsapp.png" alt=""/> */}
                </div>
                <div class="col">
                <h4 class="user-select-none"> COMPÉTENCES </h4>
                <ul class="user-select-none">
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
                
                <div class="col">
                <h4 class="user-select-none">Addresse</h4>
                    <p>
                    Yaoundé, CAMEROUN
                    </p>
                    <p>
                    +237 620 256 858/+237 650 467 369
                    </p>
                    <p>
                    daniel.iya@facsciences-uy1.cm
                    </p>
                </div>
            </div>
        </div>
        
        <div class="copywrite user-select-none ">
            @2024 IYA BOULAMDI DANIEL - Tous droits réservés
        </div>
    </>
  );
}

export default Footer;