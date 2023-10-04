import React from "react";
import CardGames from "../CardGames";
import PlaystationLogo from '../../img/PlayStation_logo.png';
import NintendoLogo from '../../img/Nintendo-logo.png';
import XboxLogo from '../../img/XBOX_logo.png';
import juego1 from '../../img/juego1.png';
import juego2 from '../../img/juego2.gif';
import juego3 from '../../img/juego3.gif';
import juego4 from '../../img/juego4.gif'
import juego5 from '../../img/juego5.webp';
import juego6 from '../../img/juego6.jpg';
import  juego7 from '../../img/juego7.jpg';
import juego8 from '../../img/juego8.jpg';

import juego9 from '../../img/juego9.webp';
import juego10 from '../../img/juego10.jpg';
import juego11 from '../../img/juego11.jpg';
import juego12 from '../../img/juego12.jpg';
function Games() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row mb-3">
                <h1 className="text-center">Marcas disponibles</h1>
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <img src={PlaystationLogo} alt="" width="300px" />
                </div>
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <img src={XboxLogo} alt="" width="300px" />
                </div>
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <img src={NintendoLogo} alt="" width="300px" />
                </div>
            </div>
            <div className="row mb-3">
                <h1>Juegos Disponibles en Playstation</h1>
                <br />
                <hr />
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego1} title="Juego para PlayStation 4 Spiderman Goty Edition"  />
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego2} title=" God Of War Hits "  />
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego3} title="Juego para PlayStation 4 Minecraft Starter Coll Refresh"  />
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego4} title="Juego para PlayStation 4 Bloodborne Hits "  />
                </div>
            </div>
            <div className="row mb-3">
                <h1>Juegos disponibles para NINTENDO </h1>
                <br />
                <hr />
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego5} title="The Legend of Zelda: Breath of the Wild | Videojuego Nintendo Switch "  />
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego6} title="The Legend of Zelda: Tears of the Kingdom"  />
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego7} title="kirby "  />
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego8} title="Super mario bross "  />
                </div>
            </div>
            <div className="row mb-3">
                <h1>Juegos  Disponibles en XBOX</h1>
                <br />
                <hr />
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego9} title="Crash Bandicoot 4: Its About Time Xbox One Físico"  />
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego10} title="Minecraft Xbox One Edition "  />
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego11}title="Call of Duty: Modern Warfare 3 with DLC "  />
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <CardGames img={juego12} title="Halo: Combat Evolved Anniversary  "  />
                </div>
            </div>
        </div>
    );
}

export default  Games;