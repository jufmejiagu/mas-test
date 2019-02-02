import React from 'react';

import './ComicToggler.css';
import Loader from '../Loader/Loader';

const ComicToggler = props =>
  props.loading ?
    <Loader block="ComicToggler" />
  :
    <span className="ComicToggler__toggler" onClick={props.onToggleActualComic}>
      {props.error ? 'Reintentar' : 'Cambiar'}
    </span>

export default ComicToggler;