// const saveToLS = (id: number) => {
//   const ids = getIdsFromLS() || [];
//   ids.push(id);
//   localStorage.setItem('likedPhotos', JSON.stringify(ids));
// };

import { PhotoType } from '../../types';

// const getIdsFromLS = () => {
//   const ids = localStorage.getItem('likedPhotos');
//   return ids ? JSON.parse(ids) : [];
// };

// const removeFromLS = (id: number) => {
//   const ids = getIdsFromLS();
//   if (ids) {
//     const updatedArray = ids.filter((savedId: string) => +savedId !== id);
//     localStorage.setItem('likedPhotos', JSON.stringify(updatedArray));
//   }
// };

// const isExistsInLS = (id: number) => {
//   const ids: string[] = getIdsFromLS();
//   return !!ids.find((savedId) => +savedId === id);
// };

// export { saveToLS, getIdsFromLS, removeFromLS, isExistsInLS };

const saveToLS = (photo: PhotoType) => {
  const photos = getPhotosFromLS() || [];
  photos.push(photo);
  localStorage.setItem('likedPhotos', JSON.stringify(photos));
};

const getPhotosFromLS = () => {
  const photos = localStorage.getItem('likedPhotos');
  return photos ? JSON.parse(photos) : [];
};

const removeFromLS = (id: number) => {
  const photos = getPhotosFromLS();
  if (photos) {
    const updatedArray = photos.filter((photo: PhotoType) => photo.id !== id);
    localStorage.setItem('likedPhotos', JSON.stringify(updatedArray));
  }
};

const isExistsInLS = (id: number) => {
  const photos: PhotoType[] = getPhotosFromLS();
  return !!photos.find((photo) => photo.id === id);
};

export { saveToLS, getPhotosFromLS, removeFromLS, isExistsInLS };
