import shortid from 'shortid';

const getPhotos = () => async (dispatch) => {
  const albumId = await new Promise((resolve) =>
    window.FB.api('/me?fields=albums.limit(1){name,count,cover_photo{picture}}', ({ albums: { data } }) =>
      resolve(data[0].id),
    ),
  );

  const photosFromAlbum = await new Promise((resolve) =>
    window.FB.api(
      `${albumId}/?fields=photos.limit(10){picture,images,created_time,place}`,
      ({ photos: { data } }) => resolve(data),
    ),
  );

  const photos =  photosFromAlbum.map((photo) => ({
    id: photo.id,
    source: photo.images[0].source,
    created_time: photo.created_time,
    key: shortid.generate(),
  }));

  dispatch({type: 'GET_PHOTOS', payload: {
    photos,
  }})
};

export default getPhotos;
