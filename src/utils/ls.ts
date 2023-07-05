const saveToLS = (id: number) => {
  const ids = getIdsFromLS() || [];
  ids.push(id);
  localStorage.setItem('likedPhotos', JSON.stringify(ids));
};

const getIdsFromLS = () => {
  const ids = localStorage.getItem('likedPhotos');
  return ids ? JSON.parse(ids) : [];
};

const removeFromLS = (id: number) => {
  const ids = getIdsFromLS();
  if (ids) {
    const updatedArray = ids.filter((savedId: string) => +savedId !== id);
    localStorage.setItem('likedPhotos', JSON.stringify(updatedArray));
  }
};

const isExistsInLS = (id: number) => {
  const ids: string[] = getIdsFromLS();
  return !!ids.find((savedId) => +savedId === id);
};

export { saveToLS, getIdsFromLS, removeFromLS, isExistsInLS };
