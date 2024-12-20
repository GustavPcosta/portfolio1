import './styles.css'



function About(){
    return(
        <section id="about" className="about section">

      
      <div className="container section-title" data-aos="fade-up">
        <h2>Sobre mim</h2>
        <p>Sou estudante de Engenharia Química, mas tenho conhecimentos em desenvolvimento de software e nas tecnologias
             que são mais relevantes no mercado de TI</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 content">
            <h2>UI/UX Designer &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
                Minhas atribuições pessoais.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Aniversário:</strong> <span>15 nov 1998</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>onepim@hotmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Telefone:</strong> <span>(73) 991433494</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Cidade:</strong> <span>Itabuna - Bahia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Idade:</strong> <span>25</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Nível:</strong> <span>Júnior</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>onepim@hotmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Sim</span></li>
                </ul>
              </div>
            </div>
            {/* <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p> */}
          </div>
        </div>

      </div>

    </section>
    )
}
export default About