import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './styles.css';

class Pokedex extends React.Component {
    constructor(props) {
        super();

        this.state = {
            pokemonsList: props.pokemons.filter((pokemon) => pokemon.type === 'Fire'),
            currentPokemon: 0,
        }
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleBack() {
        this.setState(prevState => ({
            ...prevState,
            currentPokemon: prevState.currentPokemon ? (prevState.currentPokemon - 1) : this.state.pokemonsList.length - 1,
        }));
    }

    handleNext() {
        this.setState(prevState => ({
            ...prevState,
            currentPokemon: (prevState.currentPokemon + 1) % this.state.pokemonsList.length,
        }));
    }

    handleFilter(filter) {
        this.setState((prevState) => ({
            ...prevState,
            currentPokemon: 0,
            pokemonsList: this.props.pokemons.filter((pokemon) => pokemon.type === filter || filter === 'All'),
        }));
    }

    render() {
        const pokemon = this.state.pokemonsList[this.state.currentPokemon];

        return (
            <>
                <div className="pokedex">
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                </div>
                <div className="control">
                    <button onClick={this.handleBack}>Anterior</button>
                    <button onClick={() => this.handleFilter('All')}>All</button>
                    <button onClick={() => this.handleFilter('Fire')}>Fire</button>
                    <button onClick={() => this.handleFilter('Psychic')}>Psychic</button>
                    <button onClick={this.handleNext}>Próximo</button>
                </div>
            </>
        );
    }
}

export default Pokedex;