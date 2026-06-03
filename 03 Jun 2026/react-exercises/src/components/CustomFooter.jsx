import "../styles/CustomFooter.css"

function CustomFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footerStyle">
        <p className="footerText">&#169; {currentYear} - My Dev company</p>

        <ul className="footerList">
          <li className="footerLink" href="./privacy">
            Privacy
          </li>
          <li className="footerLink" href="./termsAndCondition">
            Terms & Conditions
          </li>
          <li className="footerLink" href="./contacts">
            Contacts
          </li>
        </ul>
      </footer>
    </>
  )
}

export default CustomFooter
