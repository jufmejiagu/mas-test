import fetchAsync from './AsyncApi';

export const XKCDApi = {

  getBasicApiInfo: async () => {
    return await fetchAsync('info.0.json');
  },

  getRandomComic: async maxComicNumber => {
    const comicNumber = Math.round(Math.random() * (maxComicNumber));
      console.log(maxComicNumber);
      console.log(comicNumber);
    return await fetchAsync(`${comicNumber}/info.0.json`)
  },

};