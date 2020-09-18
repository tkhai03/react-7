import react, {useState} from 'react'

const MovieList = props => {
    const [list, setList] = useState(['Babe Pig in the City', 'Pride and Prejudice','Fury'])

    const [userInput, setUserInput] = useState('')

    const addMovieToList = () => {
        const newList = [...list, userInput]
        setList(newList)
        setUserInput('')
    }

    return(
        <div>
            {list.map((movie) => (
                <h2>{movie}</h2>
            ))}
            <input onChange={(e) => setUserInput(e.target.value)}/>
            <button>Add Movie</button>
        </div>
    )
}
export default MovieList