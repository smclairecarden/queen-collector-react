const QueenInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} onChange={handleChange} id="name"
        required name="name" type="text" placeholder="Name" autoComplete="off"
      />
      <label htmlFor="season">Season</label>
      <input
        value={form.season ? form.season : ''} onChange={handleChange} id="season"
        required name="season" type="text" placeholder="Season" autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
    </>
  )
}

export default QueenInput