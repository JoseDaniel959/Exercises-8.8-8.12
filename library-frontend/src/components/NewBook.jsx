import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { ADD_BOOK, ALL_AUTHORS, ALL_BOOKS, EDIT_AUTHOR } from '../queries'

const NewBook = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])
  const [nameAuthorToEdit, setnameAuthorToEdit] = useState('')
  const [Born, setBorn] = useState('')
  const [createBook] = useMutation(ADD_BOOK, { refetchQueries: [ALL_AUTHORS, ALL_BOOKS] })
  const [editBook] = useMutation(EDIT_AUTHOR, { refetchQueries: [ALL_AUTHORS, ALL_BOOKS] })

  // if (!props.show) {
  //   return null
  // }

  const submit = async (event) => {
    event.preventDefault()

    console.log('add book...')
    createBook({ variables: { title, author, published: Number(published), genres } })
    setTitle('')
    setPublished('')
    setAuthor('')
    setGenres([])
    setGenre('')
  }

  const submitUpdateAuthor = async (event) => {
    event.preventDefault()

    console.log('editing book...')
    editBook({ variables: {name:nameAuthorToEdit, setBornTo: Number(Born) } })
    setnameAuthorToEdit('')
    setBorn('')

  }


  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  return (
    <div>
      <h2>authors</h2>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          published
          <input
            type="number"
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type="button">
            add genre
          </button>
        </div>
        <div>genres: {genres.join(' ')}</div>
        <button type="submit">create book</button>
      </form>
      <h3>Set birthyear</h3>
      
      <form onSubmit={submitUpdateAuthor}>
        <div>
          name
          <input
            value={nameAuthorToEdit}
            onChange={({ target }) => setnameAuthorToEdit(target.value)}
          />
        </div>
        <div>
          born
          <input
            value={Born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default NewBook