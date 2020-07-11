import React, { ReactElement } from 'react';
import './Loader.scss';

export function Loader(): ReactElement {
  return(
    <div className='loader-wrapper'>
      <span className='loader' />
    </div>
  );
}
