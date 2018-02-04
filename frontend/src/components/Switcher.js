import React from 'react'

import './Switcher.css'

const Switcher = ( { options = [], selected, onChange = () => ( {} ) } ) => (
  <div className="switcher">
    {options.map( option => (
      <button
        key={option}
        className={option === selected ? 'active' : ''}
        onClick={() => onChange( option )}
      >
        {option}
      </button>
    ) )}
  </div>
)

export default Switcher
