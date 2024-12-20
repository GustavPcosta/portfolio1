import './styles.css'

function Footer(){
    return(
        <footer id="footer" className="footer position-relative light-background">
    <div className="container">
      <h3 className="sitename">Gustavo Costa</h3>
     
      <div className="social-links d-flex justify-content-center">
        <a href=""><i className="bi bi-twitter-x"></i></a>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-skype"></i></a>
        <a href=""><i className="bi bi-linkedin"></i></a>
      </div>
      <div className="container">
        <div className="copyright">
          <span>Copyright</span> <strong className="px-1 sitename">Gustavo Costa</strong> <span>All Rights Reserved</span>
        </div>
        <div className="credits">
          
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer