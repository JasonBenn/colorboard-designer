import { range, mapKeys, camelCase } from 'lodash'

export const generateUUID = () => {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r&0x3 | 0x8)).toString(16);
  });
  return uuid;
};

export const responseToJSON = response => response.json()

export const upTo = n => range(0, n)

export const normalizeKeys = obj => mapKeys(obj, (v, k) => camelCase(k))
