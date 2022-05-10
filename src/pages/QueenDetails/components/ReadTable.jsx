const ReadTable = ({ queen }) => {
  return (
    <table>
      <thead>
        <tr><th>Read</th><th>Name</th></tr>
      </thead>
      <tbody>
        {queen.reads.map((read) =>
          <tr key={read.id}>
            <td>{read.read}</td>
            <td>
              {read.name}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ReadTable