import React from 'react'
import '../style.css'
import MovieList from './MovieList'
import Counter from './Counter'
import PokemonList from './PokemonList'

const Hooks = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Hooks
        <a
          href="https://reactjs.org/docs/hooks-reference.html"
          target="__blank"
          rel="noopener"
        >
          Docs
        </a>
      </h1>
      <Counter/>
      <MovieList/>
      <PokemonList/>
    </section>
  )
}
export default Hooks
