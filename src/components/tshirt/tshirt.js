import React from 'react'
import PropTypes from 'prop-types'
import styles from './tshirt.css'
import tshirtImg from './player-shirt.png'

const Tshirt = (props) => (
  <div>
    <div className='tshirt'>
      <img src={tshirtImg}></img>
      <span className="tshirt-number">{props.number}</span>
    </div>
    <div className='player-name'>{props.name}</div>
  </div>
);

Tshirt.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Tshirt;
