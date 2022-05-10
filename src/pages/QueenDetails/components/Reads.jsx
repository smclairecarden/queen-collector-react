

// Components
import ReadForm from './ReadForm'
import ReadTable from './ReadTable'

const Reads = ({ queen, user, setQueen }) => {
  return (
    <section className="feedings">
      {<ReadForm queen={queen} setQueen={setQueen} />}
      <h3>Reads</h3>
      {queen.reads.length ?
      <ReadTable queen={queen} />
      :
      <h4>{queen.name} Has Not Been Read Yet!</h4>
      }
    </section>
  )
}

export default Reads