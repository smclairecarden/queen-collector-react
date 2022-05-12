import './ToyList.css'

// Image Assets


// Components
import ShowCard from '../../components/ShowCard/ShowCard'

const ToyList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Show List</h1>
      
      </section>
      <section className="toy-card-container">
        {props.shows.map((show) => (
          <ShowCard key={show.id} show={show} isCard={true} />
        ))}
      </section>
    </>
  )
}

export default ToyList