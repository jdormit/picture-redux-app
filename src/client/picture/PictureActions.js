import fetch from 'isomorphic-fetch';

export function postingPicture() {
  return {
    type: 'POSTING_PICTURE'
  };
}

export function addPicture(picture) {
  return {
    type: 'ADD_PICTURE',
    picture
  };
}

export function postPicture(picture) {
  return function(dispatch) {
    dispatch(postingPicture());
    return fetch('/api/picture', {
      method: 'POST',
       body: picture
     })
    .then(response => {
      dispatch(addPicture(response))
      window.location = '/'
    });
  }
}

export function requestPictures() {
  return {
    type: 'REQUEST_PICTURES'
  };
}

export function receivePictures(pictures) {
  return {
    type: 'RECEIVE_PICTURES',
    pictures
  };
}

export function getPictures() {
  return function(dispatch) {
    console.log("getting pictures");
    // dispatch a request action to set the isFetching flag
    dispatch(requestPictures());

    return fetch('/api/picture')
      .then(response => response.json().then((pictures) =>
        dispatch(receivePictures(pictures))
      ));
  }
}
