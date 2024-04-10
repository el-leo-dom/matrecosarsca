import Image from "next/image";
import "./Main.css"
import mesa from "./mesa.webp"

export default function Home() {
  return (
    <main className="main-container">
        <div className="overlay-azul">
        </div>
        <div className="overlay-tijolo">
        </div>
        <div className="main-working-container">
            <div className="player-slots">
                <div className="player-slot">

                </div>
                <div className="player-slot">

                </div>
            </div>
            <Image alt="mesa" src={mesa} className="mesa-image"/>
            <div className="player-slots">
                <div className="player-slot">

                </div>
                <div className="player-slot">

                </div>
            </div>
            <div className="main-menu-container">
                <div className="main-menu-list">
                    <div className="main-menu-item">
                      Stats
                    </div>
                    <div className="main-menu-item">
                      Procurar
                    </div>
                    <div className="main-menu-item">
                      Verificar Jogos
                    </div>
                </div>
            </div>
        </div>
        
    </main>
  );
}
