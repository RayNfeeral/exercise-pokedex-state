import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super();

        this.state = {
            currentPokemon: 0,
        }
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleBack() {
        this.setState(prevState => ({
            currentPokemon: prevState.currentPokemon ? (prevState.currentPokemon - 1) : this.props.pokemons.length - 1,
        }));
    }

    handleNext() {
        this.setState(prevState => ({
            currentPokemon: (prevState.currentPokemon + 1) % this.props.pokemons.length,
        }));
    }

    render() {
        const pokemon = this.props.pokemons[this.state.currentPokemon];

        return (
            <>
                <div className="pokedex">
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                </div>
                <div className="control">
                    <button onClick={this.handleBack}>Anterior</button>
                    <button onClick={this.handleNext}>Próximo</button>
                </div>
            </>
        );
    }
}

export default Pokedex;