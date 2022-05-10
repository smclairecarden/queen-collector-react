

// Components
import ReadForm from './ReadForm'
import ReadTable from './ReadTable'

const Reads = ({ queen, user, setQueen }) => {
  return (
    <section className="feedings">
      {<ReadForm queen={queen} setQueen={setQueen} />}
      <h3>Reads</h3>
      <ReadTable queen={queen} />
    </section>
  )
}

export default Reads