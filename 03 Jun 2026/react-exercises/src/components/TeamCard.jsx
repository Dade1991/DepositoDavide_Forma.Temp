import "../styles/TeamCard.css"

function TeamCard({ name, surname, role, bio, imageUrl, isPresent }) {
  return (
    <>
      <article className="teamCard">
        <h3 className="teamCardTitle">{name} Details:</h3>
        <div className="teamCardBody">
          <div>
            <p className="teamCardLabel">Name: {name}</p>
            <p className="teamCardLabel">Surname: {surname}</p>
            <p className="teamCardInput">Role: {role}</p>
            <div>
              <p className="teamCardLabel">Bio:</p>
              <p className="teamCardInput">{bio}</p>
            </div>
            <div className="imgWrapper">
              <img
                src={imageUrl || "https://via.placeholder.com/150"}
                alt="profileImg"
              />
            </div>
          </div>
        </div>
        <button
          className={`statusButton ${isPresent ? "availableButton" : "notAvailableButton"}`}
        >
          {isPresent ? "Available" : "Not Available"}
        </button>
      </article>
    </>
  )
}

export default TeamCard
