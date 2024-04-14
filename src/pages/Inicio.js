import React from 'react';

// Importa las imágenes
import imgBatman from '../img/icons 2/Batman-and-Batcycle.jpg';
import imgBobaFett from '../img/icons 2/Boba Fett-StarWars.jpg';
import imgBuzzLightyear from '../img/icons 2/Buzz-Lightyear.png';
import imgCocheBarbie from '../img/icons 2/cochedeBarbie.jpeg';
import imgLegoBatman from '../img/icons 2/LegoBatman.jpg';
import imgPokemonTotodile from '../img/icons 2/Pokemon-Totodile.png';

import '../styles/inicio.scss';

const Inicio = () => {
    return (
        <main className="main-container">
            <div className="card-container">
                <div className="card">
                    <h3>Totodile</h3>
                    <img src={imgPokemonTotodile} alt="Peluche de Pokemon Totodile color celeste pastel" />
                    <div className="h-description">
                        <p>Pokemon Totodile Peluche</p>
                    </div>
                    <strong>$13.000</strong>
                    <div className="buy-button">
                        <a href="#">Comprar</a>
                    </div>
                </div>
                <div className="card">
                    <h3>Batman & Batcycle</h3>
                    <img src={imgBatman} alt="Figura de acción de batman y su Batcycle" />
                    <div className="h-description">
                        <p>Batman & Batcycle</p>
                    </div>
                    <strong>$13.000</strong>
                    <div className="buy-button">
                        <a href="#">Comprar</a>
                    </div>
                </div>
                <div className="card">
                    <h3>Buzz Lightyear</h3>
                    <img src={imgBuzzLightyear} alt="Juguete de Buzz Lightyear-Toy Story 4" />
                    <div className="h-description">
                        <p>Muñeco Buzz Lightyear</p>
                    </div>
                    <strong>$10.000</strong>
                    <div className="buy-button">
                        <a href="#">Comprar</a>
                    </div>
                </div>
                <div className="card">
                    <h3>Coche Barbie Pink</h3>
                    <img src={imgCocheBarbie} alt="coche para muñeca barbie" />
                    <div className="h-description">
                        <p>Coche Rosa para muñecas</p>
                    </div>
                    <strong>$7.000</strong>
                    <div className="buy-button">
                        <a href="#">Comprar</a>
                    </div>
                </div>
                <div className="card">
                    <h3>Figura Boba Fett</h3>
                    <img src={imgBobaFett} alt="Figura de Boba Fett-StarWars" />
                    <div className="h-description">
                        <p>Figura de Boba Fett</p>
                    </div>
                    <strong>$11.999</strong>
                    <div className="buy-button">
                        <a href="#">Comprar</a>
                    </div>
                </div>
                <div className="card">
                    <h3>Lego Batman muñeco</h3>
                    <img src={imgLegoBatman} alt="Figura de Lego Batman negra con su capa" />
                    <div className="h-description">
                        <p>Lego Batman</p>
                    </div>
                    <strong>$5999</strong>
                    <div className="buy-button">
                        <a href="#">Comprar</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Inicio;

