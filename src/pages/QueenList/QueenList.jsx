import './CatList.css'

// Components
import QueenCard from '../../components/QueenCard/QueenCard'

const QueenList = ({ queens }) => {
  return (
    <>
      <section className="page-header">
        <h1>Queen List</h1>
        
      </section>
      <section className="card-container">
        {queens.map((queen) => (
          <QueenCard
            queen={queen}
            key={queen.id}
          />
        ))}
      </section>
    </>
  )
}

export default QueenList