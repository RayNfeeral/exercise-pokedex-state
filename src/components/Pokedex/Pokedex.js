import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import Button from '../Button/Button';
import './styles.css';

class Pokedex extends React.Component {
    constructor(props) {
        super();

        this.state = {
            pokemonsList: props.pokemons,
            filters: props.pokemons.reduce(
                (filters, pokemon) => {
                    if (!filters.includes(pokemon.type))  {
                        filters.push(pokemon.type);
                    }
                    return filters;
                }, ['All']),
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
                <div className="filters">
                    { this.state.filters.map((filter) => (
                    <Button
                        style={{ background: 'orange', color: 'white' }}
                        key={ filter }
                        onClick={ () => { this.handleFilter(filter)}}
                    >
                        { filter }
                    </Button>
                    )) }
                </div>
                <div className="control">
                    <Button 
                        style={{ background: 'green', color: 'white' }}
                        onClick={this.handleBack}
                    >
                        Anterior
                    </Button>
                    <Button 
                        style={{ background: 'green', color: 'white' }}
                        onClick={this.handleNext}
                    >
                        Próximo
                    </Button>
                </div>
            </>
        );
    }
}

export default Pokedex;