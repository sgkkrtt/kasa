import logo from '../assets/logo_footer.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa logo" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
