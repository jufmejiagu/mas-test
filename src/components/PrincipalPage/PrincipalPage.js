import React, { Component } from 'react';

import { XKCDApi } from '../../api/XKCDApi';
import Comic from '../Comic/Comic';
import ComicToggler from '../ComicToggler/ComicToggler';
import BottomBar from '../BottomBar/BottomBar';

import './PrincipalPage.css';

class PrincipalPage extends Component {

  state = {
    loading: true,
  }

  async componentDidMount() {
    const { num }  =  await XKCDApi.getBasicApiInfo();

    const actualComic = await XKCDApi.getRandomComic(num);

    this.setState({
      maxNumberOfComics: num,
      loading: false,
      actualComic,
    });
  }

  onToggleActualComic = () => {
    this.setState({
      loading: true,
      actualComic: null,
    }, async () => {
      const actualComic = await XKCDApi.getRandomComic(this.state.maxNumberOfComics);
      this.setState({
        loading: false,
        actualComic
      });
    });
  }

  render() {

    const {
      loading,
      actualComic,
    } = this.state;

    return (
      <div className="PrincipalPage">
        {actualComic &&
          <Comic
            comic={actualComic}
          />
        }
        <BottomBar>
          <ComicToggler
            onToggleActualComic={this.onToggleActualComic}
            loading={loading}
          />
        </BottomBar>
        
      </div>
    );
  }
};

export default PrincipalPage;