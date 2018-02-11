import React from 'react'
import PropTypes from 'prop-types'
import './lineup.css'
import Tshirt from '../tshirt'

const Lineup = (props) => {
  //Add 1 to include goalkeeper
  const formation = [1, ...props.formation.split('').map(i => parseInt(i, 10))];

  //Create a copy to not modify original object
  let playersCopy = Object.assign([], props.players);

  // Create new Array of arrays with players on each line
  const players = [];
  formation.map(i => players.push(playersCopy.splice(0, i)));

  return (<div className='lineup'>
      {players.map((p, index) =>
        <div key={`line-${index}`} className="lineupLine">
          {p.map((player, index) =>
              <Tshirt key={`player-${index}`} number={player.formation_place} name={player.name}></Tshirt>
          )}
        </div>
      )}
    </div>
  );
};

Lineup.propTypes = {
  formation: PropTypes.string.isRequired
};

export default Lineup;
