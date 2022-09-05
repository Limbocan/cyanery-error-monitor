import { obj2Str, str2Obj } from './util';
import {
  read as storageRead,
  remove as storageRemove,
  write as storageWrite,
  clear as storageClear,
} from './storage';

const MAX_LENGTH = 100;

const preName = 'csijs_';

const prefix = (keyName) => {
  if (keyName.indexOf(preName) === 0) return keyName;
  return preName + keyName;
};

const write = (keyName, keyValue, pure) => {
  if (typeof keyValue === 'object') {
    keyValue = pure ? limit(keyValue) : obj2Str(limit(keyValue));
  }

  storageWrite(prefix(keyName), keyValue);
};

const read = async (keyName, pure) => {
  const val = await storageRead(prefix(keyName));
  if (val) {
    if (pure) return val;
    return str2Obj(val);
  }
  return null;
};

const remove = (keyName) => {
  storageRemove(prefix(keyName));
};

// 限制字符长度
const limit = (keyValue) => {
  for (const id in keyValue) {
    let key = keyValue[id];
    if (typeof key !== 'string') {
      try {
        key = key.toString();
      } catch (e) {
        key = `${key}`;
      }
    }

    keyValue[id] = key.substr(0, MAX_LENGTH);
  }

  return keyValue;
};

const readLines = async () => {
  const info = await read('info');
  const lines = [];
  const length = info ? info.length : 0;
  if (info && length) {
    const max = parseInt(info.max, 10);
    const min = parseInt(info.min, 10);
    for (let i = min; i <= max; i++) {
      const keyName = `${info.type}_${i}`;
      const line = await read(keyName);
      lines.push(line);
    }
  }
  return lines;
};

const clear = async () => {
  const result = await storageClear()
  return result
}

export {
  write,
  read,
  remove,
  limit,
  readLines,
  clear,
};
