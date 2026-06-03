import "../styles/CustomHeader.css"

function CustomHeader() {
  return (
    <>
      <nav className="navbarStyle">
        <h2 className="logo">My Dev company</h2>

        <ul className="navList">
          <li className="navItem" href="/">
            Home
          </li>
          <li className="navItem" href="/team">
            Team
          </li>
          <li className="navItem" href="/contacts">
            Contacts
          </li>
        </ul>
      </nav>
    </>
  )
}

export default CustomHeader
