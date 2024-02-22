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
  get length() {
    return Object.keys(this).length;
  },
  /**
   * @param {string} key
   * @param {any} value
   */
  setItem(key, value) {
    this[key] = value;
  },
  /**
   * @param {string} key
   */
  getItem(key) {
    return this.hasOwnProperty(key) ? this[key] : null;
  },
  /**
   * @param {string} key
   */
  removeItem(key) {
    if (key !== undefined && this.hasOwnProperty(key.toString())) {
      delete this[key.toString()];
    }
  },
  clear() {
    for (let key in Object.keys(this)) {
      if (this.hasOwnProperty(key)) {
        delete this[key];
      }
    }
  },
};
