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

const localStorage = {
  storage: {},
  length: 0,
  setItem(key, value) {
    if (key) {
      this.storage[key] = value;
      this.length++;
    } else throw new TypeError();
  },
  getItem(key) {
    if (this.storage[key]) return this.storage[key];
    else if (!key) throw new TypeError();
  },
  removeItem(key) {
    if (this.storage[key]) {
      delete this.storage[key];
      this.length--;
    }
  },
  clear() {
    this.storage = {};
    this.length = 0;
  },
};
