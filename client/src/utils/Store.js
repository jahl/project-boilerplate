/*
Store

Utility class that saves and retreives information from the local storage
*/
class Store {
  static set(key, value) {
    if(value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    console.warn(value, " is not a valid value for the store.");
  }

  static get(key) {
    const value = localStorage.getItem(key);
    if(value) {
      return JSON.parse(value);
    }
    console.warn(`No valid value for key ${key}, empty object returned.`);
    return {};
  }
}

export default Store;