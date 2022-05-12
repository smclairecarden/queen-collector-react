// Components
import ShowContainer from './ShowContainer'

const ShowCollection = ({ queen, shows, user, addToCollection }) => {
  return (
    <section className="shows">
      <h3>{queen.name}'s Shows</h3>
      <div className="subsection-content">
        {queen.shows.length
          ? queen.shows.map((show) => <ShowContainer key={show.id} show={show} />)
          : <p className="no-shows">{queen.name} doesn't have any shows coming up!</p>
        }
      </div>
      {user.id === queen.profile_id &&
        <>
          <h3>Available Shows</h3>
          <div className="subsection-content">
            {shows.length
              ? shows.map((show) => <ShowContainer key={show.id} show={show} queen={queen} user={user} addToCollection={addToCollection} />)
              : <p className="all-shows"> {queen.name} does not have any shows to add at this time.</p>
            }
          </div>
        </>
      }
    </section>
  )
}

export default ShowCollection