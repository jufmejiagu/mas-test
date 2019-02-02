
async function fetchAsync(url, method = 'GET', bodyData = null, controller) {

  const request = {
    method,
    headers: new Headers({
      'Cache-Control': 'no-cache',
    }),
  };


  if (bodyData) {
    request.body = JSON.stringify(bodyData);
  }

  const response = (await fetch(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${url}`, request)).json();

  return response;

};

export default fetchAsync;