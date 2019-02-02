import fetchAsync from './AsyncApi';

export const XKCDApi = {

  getBasicApiInfo: async () => {
    return await fetchAsync('info.0.json');
  },

  getRandomComic: async maxComicNumber => {
    const comicNumber = Math.round(Math.random() * (maxComicNumber));
    return await fetchAsync(`${comicNumber}/info.0.json`)
  },

};