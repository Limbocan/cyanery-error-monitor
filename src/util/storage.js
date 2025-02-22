import localStorage from 'localforage'

// 本地存储
const write = (keyName, keyValue) => {
  try {
    localStorage && localStorage.setItem(keyName, keyValue);
  } catch (e) {}
};

const read = (keyName) => {
  if (localStorage && localStorage.getItem) return localStorage.getItem(keyName);
  return null;
};

const remove = (keyName) => {
  try {
    localStorage && localStorage.removeItem(keyName);
  } catch (e) {}
};

const clear = () => localStorage.clear()

export {
  write,
  read,
  remove,
  clear,
};
