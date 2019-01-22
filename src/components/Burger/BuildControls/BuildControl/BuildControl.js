import React from 'react';
import './BuildControl.css';

const buildControl = props => (
  <div className='BuildControl'>
    <div className='build-control-label'>{props.label}</div>
    <button className='btn-less' onClick={props.remove} disabled={props.disabled}>
      Less
    </button>
    <span>{props.ingredientNo}</span>
    <button className='btn-more' onClick={props.add}>
      More
    </button>
  </div>
);

export default buildControl;
