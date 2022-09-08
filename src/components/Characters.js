import React from "react";

export const Characters = (props) => {
  const { characters, setCharacters } = props;

  const resetCharacters =() =>{
     setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
      <div className="container-characters">
        {characters.map((personaje, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={personaje.image} alt={personaje.name} />
            </div>
            <div>
              <h3>{personaje.name}</h3>
              <h6>
                {personaje.status === "Alive" ? (
                  <>
                    <span className="alive"></span>
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead"></span>
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios:</span>
                <span>{personaje.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie:</span>
                <span>{personaje.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
    </div>
  );
};

export default Characters;
