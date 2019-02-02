import React, { Component } from 'react';

import './Comic.css';
import ComicRating from '../ComicRating/ComicRating';


class Comic extends Component {

  render() {

    const { comic } = this.props;


    return (
      <div className="Comic">
        <h1>{comic.title}</h1>
        <ComicRating />
        <img src={comic.img} alt={comic.title}/>
      </div>
    );
  }
}

export default Comic;
