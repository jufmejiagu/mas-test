import React, { Component } from 'react';

import { XKCDApi } from '../../api/XKCDApi';
import Comic from '../Comic/Comic';
import ComicToggler from '../ComicToggler/ComicToggler';
import BottomBar from '../BottomBar/BottomBar';

import './PrincipalPage.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

class PrincipalPage extends Component {

  state = {
    loading: true,
    maxNumberOfComics: 0,
    actualComic: null,
    error: null,
  }

  async componentDidMount() {

    try {
      const { num }  =  await XKCDApi.getBasicApiInfo();

      const actualComic = await XKCDApi.getRandomComic(num);
  
      this.setState({
        maxNumberOfComics: num,
        loading: false,
        actualComic,
      });
    } catch(e) {
      this.setState({
        error: true,
        loading: false,
      });
    }
    
  }

  onToggleActualComic = () => {
    this.setState({
      loading: true,
      actualComic: null,
    }, async () => {
      try {
        let maxNumberOfComics = this.state;
        if (maxNumberOfComics === 0) {
          let { num } =  await XKCDApi.getBasicApiInfo();
          maxNumberOfComics = num;
        } 
        const actualComic = await XKCDApi.getRandomComic(maxNumberOfComics);
        this.setState({
          loading: false,
          actualComic,
        });
      } catch(e) {
        this.setState({
          error: true,
          loading: false,
        });
      }
    });
  }

  render() {

    const {
      loading,
      actualComic,
      error,
    } = this.state;

    return (
      <div className="PrincipalPage">
        {error &&
          <ErrorMessage
            message="Ups! Estamos teniendo problemas con los comics, intentalo de nuevo"
            onClick={this.onToggleActualComic}
          />
        }
        {actualComic &&
          <Comic
            comic={actualComic}
          />
        }
        <BottomBar>
          <ComicToggler
            onToggleActualComic={this.onToggleActualComic}
            loading={loading}
            error={error}
          />
        </BottomBar>
        
      </div>
    );
  }
};

export default PrincipalPage;