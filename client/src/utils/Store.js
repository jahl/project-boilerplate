/* 
Store

Utility class that saves and retreives information from the local storage
*/
class Store {
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export default Store;