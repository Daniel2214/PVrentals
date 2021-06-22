
export const loadFromLocalStorage = (cacheItem) => {
  try {
    const serializedState = localStorage.getItem(cacheItem)
    if(!serializedState) return null
    return serializedState;
  }
  catch(err) {
    console.error(err);
  }
}

export const saveToLocalStorage = (state, cacheItem) => {
  try {
    localStorage.setItem(cacheItem, state);
  } catch (err) {
    console.error(err);
  }
}
