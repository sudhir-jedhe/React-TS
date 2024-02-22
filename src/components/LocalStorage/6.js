/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * Do change name of the object
 * Final object should be of the name `localStorage`
 **/

class LocalStorage {
  constructor() {
    this.store = new Map();
  }

  get length() {
    return this.store.size;
  }

  setItem(...args) {
    if (args.length < 2) {
      throw new TypeError(`Expected 2 parameters but got ${args.length}`);
    }
    const [key, value] = args;
    this.store.set(String(key), value);
  }

  getItem(...args) {
    if (args.length < 1) {
      throw new TypeError(`Expected 1 parameter but got ${args.length}`);
    }
    const [key] = args;
    return this.store.get(String(key));
  }

  removeItem(key) {
    this.store.delete(String(key));
  }

  clear() {
    this.store.clear();
  }
}

const localStorage = new LocalStorage();
