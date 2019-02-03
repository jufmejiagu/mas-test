import React, { Component } from 'react';

import './ComicRating.css';

class ComicRating extends Component {


  state = {
    isQualified: false,
    qualification: 0,
  }

  onQualify = qualification => {
    this.setState({
      isQualified: true,
      qualification,
    })
  }

  render() {

    const {
      isQualified,
      qualification
    } = this.state;

    return (
      <div className="ComicRating">
        {['☆', '☆', '☆', '☆', '☆'].map((star, index) =>
          <span
            key={`Comic-Rating-${index}`}
            onClick={() => this.onQualify(index)}
            className={isQualified && qualification <= index ? "ComicRating__star--filled" : ""}
          >
            {star}
          </span>  
        )}
      </div>
    )
  }
};

export default ComicRating;